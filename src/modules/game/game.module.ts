import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BalanceController } from './controllers/balance.controller';
import { GameController } from './controllers/game.controller';
import { SyncController } from '../sync/controllers/sync.controller';
import { GameEntity } from './entities/game.entity';
import { GameService } from './services/game.service';

@Module({
  imports: [TypeOrmModule.forFeature([GameEntity])],
  controllers: [BalanceController, GameController, SyncController],
  providers: [GameService],
})
export class GameModule {}
