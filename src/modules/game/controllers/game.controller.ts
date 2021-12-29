import { Controller, Get } from "@nestjs/common";
import { GameListResDto } from "../dto/game.res.dto";

@Controller('/game')
export class GameController {
  constructor() {}

  @Get('/get')
  async get(): Promise<GameListResDto> {
    // todo
    return {
      data: [],
      total: 0,
      pageNumber: 0,
      pageSize: 0
    };
  }
}