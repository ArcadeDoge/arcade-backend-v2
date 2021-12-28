import { Type } from "class-transformer";
import { IsString } from "class-validator";
import { QueryOptionsDto } from "src/dto/query.options.dto"

export class QueryDiscussionAllReqDto extends QueryOptionsDto {

  @Type(() => Number)
  stuffId: number;
}

export class QueryDiscussionAccountReqDto extends QueryDiscussionAllReqDto {

  @IsString()
  account: string;
}