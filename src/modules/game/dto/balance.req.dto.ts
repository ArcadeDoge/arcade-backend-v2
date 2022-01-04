import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

export class VerifySwapReqDto {
  @Type(() => Number)
  @IsInt()
  @IsEnum({ Buy: 0, Sell: 1 })
  swapType: number;

  @IsString()
  requester: string;

  @IsString()
  gcToken: string;

  @Type(() => Number)
  @IsInt()
  @IsEnum({ MarsDoge: 1 })
  gameId: number;

  @IsString()
  amount: string;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  reserved1: number;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  reserved2: number;
}
