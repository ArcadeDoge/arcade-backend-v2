import { Type } from "class-transformer";
import { IsInt, IsString } from "class-validator";

export class VerifySwapReqDto {
  
  @IsString()
  requester: string;

  @IsString()
  gcToken: string;

  @Type(() => Number)
  @IsInt()
  gameId: number;

  @Type(() => Number)
  @IsInt()
  amount: number;

  @Type(() => Number)
  @IsInt()
  reserved1: number;

  @Type(() => Number)
  @IsInt()
  reserved2: number;
}