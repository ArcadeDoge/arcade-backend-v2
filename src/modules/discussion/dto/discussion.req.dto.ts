import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsString } from 'class-validator';
import { QueryOptionsDto } from 'src/dto/query.options.dto';

export class QueryDiscussionAllReqDto extends QueryOptionsDto {
  @Type(() => Number)
  readonly stuffId: number;
}

export class QueryDiscussionAccountReqDto extends QueryDiscussionAllReqDto {
  @IsString()
  readonly account: string;
}

export class CreateDiscussionReqDto {
  @Type(() => Number)
  @IsInt()
  readonly stuffId: number;

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
