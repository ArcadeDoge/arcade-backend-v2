import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlockNumberEntity } from '../entities/blocknumber.entity';

@Injectable()
export class BlockNumberService {
  constructor(
    @InjectRepository(BlockNumberEntity)
    private readonly blockNumberRepository: Repository<BlockNumberEntity>
  ) {}

  async blockNumber(contractType: number): Promise<number | undefined> {
    const entity: BlockNumberEntity | undefined =
      await this.blockNumberRepository.findOne({
        where: {
          contract_type: contractType,
        },
      });
    return entity?.blockNumber ?? undefined;
  }
}
