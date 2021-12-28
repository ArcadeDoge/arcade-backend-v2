import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, SelectQueryBuilder } from "typeorm";
import { DiscussionListResDto, DiscussionResDto } from "../dto/discussion.res.dto";
import { StuffResDto } from "../dto/stuff.res.dto";
import { DiscussionEntity } from "../entities/discussion.entity";
import { LikesService } from "./likes.service";

@Injectable()
export class DiscussionService {
  constructor(
    @InjectRepository(DiscussionEntity)
    private readonly discussionRepository: Repository<DiscussionEntity>,
    private readonly likesService: LikesService
  ) {}

  async discussionByPage(pageNumber: number, pageSize: number): Promise<DiscussionListResDto> {
    const [data, total] =
      await this.discussionRepository
        .createQueryBuilder('discussion')
        .select('discussion.stuff_id', 'stuffId')
        .addSelect('discussion.content', 'content')
        .addSelect('discussion.user', 'user')
        .addSelect('discussion.user_type', 'userType')
        .addSelect('discussion.likes', 'likes')
        .addSelect('count(comment.id)', 'commentCnt')
        .leftJoin('tbl_comment', 'comment', 'discussion.id = comment.discussion_id')
        .groupBy('discussion.id')
        .orderBy('discussion.likes', 'DESC')
        .offset(pageNumber * pageSize)
        .limit(pageSize)
        .printSql()
        .getManyAndCount();
    return {
      data,
      total,
      pageSize,
      pageNumber
    };
  }

  async discussionByStuffIdAndPage(stuffId: number, pageNumber: number, pageSize: number): Promise<DiscussionListResDto> {
    const queryBuilder: SelectQueryBuilder<any> =
      this.discussionRepository
        .createQueryBuilder('discussion')
        .select('discussion.id', 'id')
        .addSelect('discussion.stuff_id', 'stuffId')
        .addSelect('discussion.content', 'content')
        .addSelect('discussion.user', 'user')
        .addSelect('discussion.user_type', 'userType')
        .addSelect('discussion.likes', 'likes')
        .addSelect('count(comment.id)', 'commentCnt')
        .leftJoin('tbl_comment', 'comment', 'discussion.id = comment.discussion_id')
        .where('discussion.stuff_id = :stuff_id', { stuff_id: `${stuffId}`})
        .groupBy('discussion.id')
        .orderBy('discussion.likes', 'DESC')
        .offset(pageNumber * pageSize)
        .limit(pageSize)
        .printSql();

    const total = await queryBuilder.getCount();
    const data = await queryBuilder.getRawMany();
    return {
      data,
      total,
      pageSize,
      pageNumber
    };
  }

  async discussionByKeyword(stuffId: number, pageNumber: number, pageSize: number, keyword: string): Promise<DiscussionListResDto> {
    const queryBuilder: SelectQueryBuilder<DiscussionEntity> =
      this.discussionRepository
        .createQueryBuilder('discussion')
        .select()
        .where('content like :content', { content: `%${keyword}%` })
        .andWhere('stuff_id = :stuffId', { stuffId })
        .orderBy('discussion.likes', 'DESC')
        .offset(pageNumber * pageSize)
        .limit(pageSize)
        .printSql();
    const total = await queryBuilder.getCount();
    const data = await queryBuilder.getMany();
    return {
      data,
      total,
      pageSize,
      pageNumber
    }
  }

  async fillWithLikes(stuffId: number): Promise<DiscussionResDto[]> {
    const discussions = await this.discussionByStuffIdAndPage(stuffId, 0, 5);
    await Promise.all(discussions.data.map(async (discussion: DiscussionResDto, index: number) => {
      discussions.data[index].likes = await this.likesService.likes(discussion.id, -1);
    }));
    return discussions.data;
  }
}