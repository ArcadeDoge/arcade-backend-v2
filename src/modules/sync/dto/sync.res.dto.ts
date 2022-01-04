import { QueryListResDto } from 'src/dto/query.list.res.dto';
import { QueryResDto } from 'src/dto/query.res.dto';

export class TxsResDto extends QueryResDto {
  // todo
}

export class TxsListResDto extends QueryListResDto<TxsResDto> {
  constructor(pageSize: number, pageNumber: number, data: TxsResDto[]) {
    super(pageSize, pageNumber, data);
  }
}
