import { Type } from "class-transformer";
import { IsString } from "class-validator";
import { QueryOptionsDto } from "src/dto/query.options.dto";

export class MarketItemReqDto extends QueryOptionsDto{

  @Type(() => Number)
  gameId: number;

  @Type(() => Number)
  category: number;

  @Type(() => Number)
  sortType: number;
}

export class UploadMaterialDto {
  
}