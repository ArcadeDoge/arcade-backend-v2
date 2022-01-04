import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class TxsReqDto {
  @Type(() => Number)
  @IsInt()
  gameId: number;

  @Type(() => Number)
  @IsInt()
  index: number;

  @Type(() => Number)
  @IsInt()
  count: number;
}
