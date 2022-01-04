import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';
import { QueryOptionsDto } from 'src/dto/query.options.dto';

export class MarketItemReqDto extends QueryOptionsDto {
  @Type(() => Number)
  @IsInt()
  gameId: number;

  @Type(() => Number)
  @IsInt()
  category: number;

  @Type(() => Number)
  @IsInt()
  sortType: number;
}

export class UploadMaterialDto {}
