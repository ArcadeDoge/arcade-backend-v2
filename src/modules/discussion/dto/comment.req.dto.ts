import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsString } from 'class-validator';

export class CreateCommentReqDto {
  @Type(() => Number)
  @IsInt()
  readonly discussionId: number;

  @Type(() => Number)
  @IsInt()
  readonly parentId: number;

  @IsString()
  readonly content: string;

  @Type(() => Number)
  @IsInt()
  @IsEnum({ Normal: 0, Anonymous: 1 })
  readonly userType: number;

  @IsString()
  readonly signature: string;

  @IsString()
  readonly account: string;
}
