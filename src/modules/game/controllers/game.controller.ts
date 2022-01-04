import { Controller, Get, Post } from '@nestjs/common';
import { GameListResDto } from '../dto/game.res.dto';

@Controller('/game')
export class GameController {
  @Get('/get')
  async get(): Promise<GameListResDto> {
    // todo
    return {
      data: [],
      total: 0,
      pageNumber: 0,
      pageSize: 0,
    };
  }
}
