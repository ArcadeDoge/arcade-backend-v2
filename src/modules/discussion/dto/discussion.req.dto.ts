import { Type } from "class-transformer";
import { IsEnum, IsInt, IsString } from "class-validator";
import { QueryOptionsDto } from "src/dto/query.options.dto"

export class QueryDiscussionAllReqDto extends QueryOptionsDto {

  @Type(() => Number)
  stuffId: number;
}

export class QueryDiscussionAccountReqDto extends QueryDiscussionAllReqDto {

  @IsString()
  account: string;
}

export class CreateDiscussionReqDto {

  @Type(() => Number)
  @IsInt()
  stuffId: number;

  @IsString()
  content: string;

  @Type(() => Number)
  @IsInt()
  @IsEnum({ Normal: 0, Anonymous: 1 })
  userType: number;

  @IsString()
  signature: string;

  @IsString()
  account: string;
}