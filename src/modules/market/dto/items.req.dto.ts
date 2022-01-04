import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';
import { QueryOptionsDto } from 'src/dto/query.options.dto';

export class MarketItemReqDto extends QueryOptionsDto {
  @Type(() => Number)
  @IsInt()
  readonly gameId: number;

  @Type(() => Number)
  @IsInt()
  readonly category: number;

  @Type(() => Number)
  @IsInt()
  readonly sortType: number;
}

export class UploadMaterialDto {}
