import { QueryResDto } from 'src/dto/query.res.dto';

export class CommentResDto extends QueryResDto {
  readonly discussionId: number;

  readonly parentId: number;

  readonly content: string;

  readonly user: string;

  readonly userType: number;

  readonly likes: number;
}
