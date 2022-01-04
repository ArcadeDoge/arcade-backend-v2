import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StuffListResDto, StuffResDto } from '../dto/stuff.res.dto';
import { StuffEntity } from '../entities/stuff.entity';

@Injectable()
export class StuffService {
  constructor(
    @InjectRepository(StuffEntity)
    private readonly stuffRepository: Repository<StuffEntity>
  ) {}

  async stuffById(id: number): Promise<StuffResDto | undefined> {
    const stuffEntity: StuffEntity | undefined =
      await this.stuffRepository.findOne({
        where: { id },
      });
    return stuffEntity ?? undefined;
  }

  async stuffs(): Promise<StuffListResDto> {
    const data: StuffEntity[] = await this.stuffRepository
      .createQueryBuilder('stuff')
      .select()
      .getMany();
    return {
      data,
      total: data.length,
      pageNumber: 0,
      pageSize: data.length,
    };
  }
}
