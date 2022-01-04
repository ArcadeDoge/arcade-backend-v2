import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class TxsReqDto {
  @Type(() => Number)
  @IsInt()
  readonly gameId: number;

  @Type(() => Number)
  @IsInt()
  readonly blockNumber: number;

  @Type(() => Number)
  @IsInt()
  readonly count: number;
}
