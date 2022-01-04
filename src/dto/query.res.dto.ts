import { IsOptional } from 'class-validator';

export class QueryResDto {
  @IsOptional()
  id?: number;

  @IsOptional()
  createdAt?: Date;

  @IsOptional()
  updatedAt?: Date;
}
