import { QueryListResDto } from 'src/dto/query.list.res.dto';
import { QueryResDto } from 'src/dto/query.res.dto';

export class ItemResDto extends QueryResDto {
  // todo
}

export class ItemListResDto extends QueryListResDto<ItemResDto> {}
