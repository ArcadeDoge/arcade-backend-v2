import { IsString } from 'class-validator';
import { QueryListResDto } from 'src/dto/query.list.res.dto';
import { QueryResDto } from 'src/dto/query.res.dto';

export class GameResDto extends QueryResDto {
  @IsString()
  readonly name: string;
}

export class GameListResDto extends QueryListResDto<GameResDto> {
  constructor(pageSize: number, pageNumber: number, data: GameResDto[]) {
    super(pageSize, pageNumber, data);
  }
}
