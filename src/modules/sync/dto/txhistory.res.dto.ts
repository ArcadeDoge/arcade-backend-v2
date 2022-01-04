import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { QueryListResDto } from 'src/dto/query.list.res.dto';

export class TxHistoryResDto {
  @IsString()
  @IsNotEmpty()
  readonly txId: string;

  @Type(() => Number)
  @IsInt()
  readonly gameId: number;

  @IsInt()
  @IsOptional()
  readonly tokenId?: number;

  @IsString()
  @IsNotEmpty()
  readonly fromAddr: string;

  @IsString()
  @IsNotEmpty()
  readonly toAddr: string;

  @IsString()
  @IsOptional()
  readonly assetId?: string;

  @IsString()
  @IsOptional()
  readonly tokenAmount?: string;

  @IsString()
  @IsOptional()
  readonly gcAmount?: string;

  @Type(() => Number)
  @IsInt()
  readonly type: number;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  readonly blockTimestamp?: number;

  @Type(() => Number)
  @IsInt()
  readonly blockNumber: number;
}

export class TxHistoryListResDto extends QueryListResDto<TxHistoryResDto> {
  constructor(pageSize: number, pageNumber: number, data: TxHistoryResDto[]) {
    super(pageSize, pageNumber, data);
  }
}
