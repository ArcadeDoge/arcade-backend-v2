import { QueryListResDto } from 'src/dto/query.list.res.dto';
import { QueryResDto } from 'src/dto/query.res.dto';

export class DiscussionResDto extends QueryResDto {
  readonly stuffId: number;

  readonly content: string;

  readonly user: string;

  readonly userType: number;

  likes: number;

  readonly commentCnt?: number;
}

export class DiscussionListResDto extends QueryListResDto<DiscussionResDto> {
  constructor(pageSize: number, pageNumber: number, data: DiscussionResDto[]) {
    super(pageSize, pageNumber, data);
  }
}
