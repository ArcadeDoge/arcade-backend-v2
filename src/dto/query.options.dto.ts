import { IsOptional } from 'class-validator';

export class QueryOptionsDto {
  @IsOptional()
  readonly pageSize?: number;

  @IsOptional()
  readonly pageNumber?: number;
}
