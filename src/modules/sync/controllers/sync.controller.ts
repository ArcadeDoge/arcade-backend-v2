import { Body, Controller, Post } from '@nestjs/common';
import { ContractType } from 'src/constants/types';
import { TxsReqDto } from '../dto/sync.req.dto';
import { TxsListResDto } from '../dto/sync.res.dto';
import { BlockNumberService } from '../services/blocknumber.service';

@Controller('/sync')
export class SyncController {
  constructor(private readonly blockNumberService: BlockNumberService) {
    this.init();
  }

  async init() {
    await this.syncSwapBlocks();
  }

  async syncSwapBlocks() {
    const blockNumber = await this.blockNumberService.blockNumber(
      ContractType.SWAP
    );
  }

  @Post('/txs')
  async txs(@Body() reqDto: TxsReqDto): Promise<TxsListResDto> {
    // contract type
    const blockNumber = await this.blockNumberService.blockNumber(3);

    // todo
    return {
      data: [],
      total: 0,
      pageNumber: 0,
      pageSize: 0,
    };
  }
}
