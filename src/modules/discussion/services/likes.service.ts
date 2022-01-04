import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LikesEntity } from '../entities/likes.entity';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(LikesEntity)
    private readonly likesRepository: Repository<LikesEntity>
  ) {}

  async likes(discussionId: number, parentId: number): Promise<number> {
    return await this.likesRepository
      .createQueryBuilder('likes')
      .where('discussion_id = :discussionId', { discussionId })
      .andWhere('parent_id = :parentId', { parentId })
      .getCount();
  }
}
