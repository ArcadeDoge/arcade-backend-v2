import { Type } from "class-transformer";
import { IsEnum, IsString } from "class-validator";

class LikesReqDto {
  @Type(() => Number)
  discussionId: number;

  @Type(() => Number)
  parentId: number;

  @IsString()
  user: string;
}

export class GetLikesReqDto extends LikesReqDto {
}

export class SetLikesReqDto extends LikesReqDto {
}