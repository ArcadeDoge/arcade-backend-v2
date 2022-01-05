import { Type } from 'class-transformer';
import { IsInt, IsString } from 'class-validator';

class LikesReqDto {
  @Type(() => Number)
  @IsInt()
  readonly discussionId: number;

  @Type(() => Number)
  @IsInt()
  readonly parentId: number;

  @IsString()
  readonly user: string;
}

export class GetLikesReqDto extends LikesReqDto {}

export class SetLikesReqDto extends LikesReqDto {}
