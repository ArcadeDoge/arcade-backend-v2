import { Type } from "class-transformer";
import { IsEnum, IsString } from "class-validator";

export class CreateCommentReqDto {

  @Type(() => Number)
  discussionId: number;

  @Type(() => Number)
  parentId: number;

  @IsString()
  content: string;

  @Type(() => Number)
  @IsEnum({ Normal: 0, Anonymous: 1 })
  userType: number;

  @IsString()
  signature: string;

  @IsString()
  account: string;
}