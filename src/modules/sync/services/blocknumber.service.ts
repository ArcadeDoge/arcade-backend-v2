import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContractType } from 'src/constants/types';
import { Repository } from 'typeorm';
import { BlockNumberEntity } from '../entities/blocknumber.entity';

@Injectable()
export class BlockNumberService {
  constructor(
    @InjectRepository(BlockNumberEntity)
    private readonly blockNumberRepository: Repository<BlockNumberEntity>
  ) {}

  async blockNumber(contractType: ContractType): Promise<number | undefined> {
    const entity: BlockNumberEntity | undefined =
      await this.blockNumberRepository.findOne({
        where: {
          contractType,
        },
      });
    return entity?.blockNumber ?? undefined;
  }

  async updateBlockNumber(
    contractType: ContractType,
    blockNumber: number
  ): Promise<boolean> {
    const { affected } = await this.blockNumberRepository.update(
      {
        contractType,
      },
      { blockNumber }
    );

    return affected > 0 ? true : false;
  }
}
