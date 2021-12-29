import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GameController } from "./controllers/game.controller";
import { GameEntity } from "./entities/game.entity";
import { GameService } from "./services/game.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      GameEntity
    ])
  ],
  controllers: [
    GameController
  ],
  providers: [
    GameService
  ]
})
export class GameModule {}