import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsString } from 'class-validator';

class LikesReqDto {
  @Type(() => Number)
  @IsInt()
  discussionId: number;

  @Type(() => Number)
  @IsInt()
  parentId: number;

  @IsString()
  user: string;
}

export class GetLikesReqDto extends LikesReqDto {}

export class SetLikesReqDto extends LikesReqDto {}
