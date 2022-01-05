import {
  Body,
  Controller,
  Inject,
  Logger,
  LoggerService,
  Post,
} from '@nestjs/common';
import { ethers } from 'ethers';
import { configuration } from 'src/config/default.config';
import { ContractType, TxType } from 'src/constants/types';
import { TxsReqDto } from '../dto/sync.req.dto';
import { TxHistoryListResDto, TxHistoryResDto } from '../dto/txhistory.res.dto';
import { BlockNumberService } from '../services/blocknumber.service';
import { TxHistoryService } from '../services/txhistory.service';

@Controller('/sync')
export class SyncController {
  constructor(
    private readonly blockNumberService: BlockNumberService,
    private readonly txHistoryService: TxHistoryService
  ) {
    this.init();
  }

  async init() {
    await this.syncSwapBlocks();

    setTimeout(() => {
      this.init();
    }, configuration().syncDelay);
  }

  async syncSwapBlocks() {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        configuration().rpcUrl
      );

      const fromBlockInDB = await this.blockNumberService.blockNumber(
        ContractType.SWAP
      );
      const currentBlock = await provider.getBlockNumber();

      const SwapGameCurrencyTopic = ethers.utils.id(
        'SwapGameCurrency(uint256,uint256,address,uint256,uint256,uint256)'
      );

      const fromBlock =
        fromBlockInDB === undefined ? currentBlock : fromBlockInDB + 1;
      const toBlock = Math.min(fromBlock + 4000, currentBlock);

      const fills = await provider.getLogs({
        address: configuration().swapContract,
        topics: [SwapGameCurrencyTopic],
        fromBlock,
        toBlock,
      });

      const trades: TxHistoryResDto[] = fills.map((fill) => {
        // const topic = fill.topics[0];
        const type = parseInt(fill.topics[1]); // 1: buyGc, 2: sellGc
        const gameId = parseInt(fill.topics[2]);
        const user = ethers.utils.getAddress(
          ethers.utils.hexDataSlice(fill.topics[3], 12)
        );
        const amount = ethers.BigNumber.from(
          ethers.utils.hexDataSlice(fill.data, 0, 32)
        );
        const received = ethers.BigNumber.from(
          ethers.utils.hexDataSlice(fill.data, 32, 64)
        );

        const trade = {
          txId: fill.transactionHash,
          gameId,
          fromAddr: user,
          toAddr: user,
          tokenAmount: type === 1 ? amount.toString() : received.toString(),
          gcAmount: type === 1 ? received.toString() : amount.toString(),
          type: type === 1 ? TxType.BuyGameCurrency : TxType.SellGameCurrency,
          blockNumber: fill.blockNumber,
        };

        Logger.log(`sync transaction: ${JSON.stringify(trade)}`);

        return trade;
      });

      if (trades.length > 0) {
        const records: number = await this.txHistoryService.addHistories(
          trades
        );

        Logger.log(
          `Updated ${records} of ${trades.length} transactions are stored successfully`
        );
      }

      await this.blockNumberService.updateBlockNumber(
        ContractType.SWAP,
        toBlock
      );
    } catch (err) {
      Logger.error(err);
    }
  }

  @Post('/txs')
  async txs(@Body() reqDto: TxsReqDto): Promise<TxHistoryListResDto> {
    return await this.txHistoryService.histories(
      reqDto.gameId,
      reqDto.blockNumber,
      reqDto.count
    );
  }
}
