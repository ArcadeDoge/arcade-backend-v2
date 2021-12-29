import { Type } from "class-transformer";
import { IsEnum, IsInt, IsString } from "class-validator";

export class CreateCommentReqDto {

  @Type(() => Number)
  @IsInt()
  discussionId: number;

  @Type(() => Number)
  @IsInt()
  parentId: number;

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