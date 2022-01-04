import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TxHistoryListResDto, TxHistoryResDto } from '../dto/txhistory.res.dto';
import { TxHistoryEntity } from '../entities/txhistory.entity';

@Injectable()
export class TxHistoryService {
  constructor(
    @InjectRepository(TxHistoryEntity)
    private readonly txHistoryRepository: Repository<TxHistoryEntity>
  ) {}

  async addHistory(historyDto: TxHistoryResDto): Promise<boolean> {
    const historyEntity = this.txHistoryRepository.create({
      ...historyDto,
    });
    await this.txHistoryRepository.save(historyEntity);
    return true;
  }

  async addHistories(historisDto: TxHistoryResDto[]): Promise<number> {
    const {
      raw: { affectedRows },
    } = await this.txHistoryRepository.insert(historisDto);

    console.log('affectedRows', affectedRows);
    return affectedRows;
  }

  async histories(
    gameId: number,
    blockNumber: number,
    count: number
  ): Promise<TxHistoryListResDto> {
    const data: TxHistoryResDto[] = await this.txHistoryRepository
      .createQueryBuilder('txs')
      .select()
      .where('game_id = :gameId AND block_number > :blockNumber', {
        gameId,
        blockNumber,
      })
      .limit(count)
      .getMany();
    return {
      data,
      total: data.length,
      pageNumber: 0,
      pageSize: data.length,
    };
  }
}
