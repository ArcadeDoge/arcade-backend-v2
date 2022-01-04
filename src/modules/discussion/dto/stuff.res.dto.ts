import { QueryListResDto } from 'src/dto/query.list.res.dto';
import { QueryResDto } from 'src/dto/query.res.dto';
import { DiscussionResDto } from './discussion.res.dto';

export class StuffResDto extends QueryResDto {
  readonly title?: string;

  discussions?: DiscussionResDto[];
}

export class StuffListResDto extends QueryListResDto<StuffResDto> {
  constructor(pageSize: number, pageNumber: number, data: StuffResDto[]) {
    super(pageSize, pageNumber, data);
  }
}
