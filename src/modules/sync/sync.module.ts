import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SyncController } from './controllers/sync.controller';
import { BlockNumberEntity } from './entities/blocknumber.entity';
import { TxHistoryEntity } from './entities/txhistory.entity';
import { BlockNumberService } from './services/blocknumber.service';
import { TxHistoryService } from './services/txhistory.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlockNumberEntity, TxHistoryEntity])],
  controllers: [SyncController],
  providers: [BlockNumberService, TxHistoryService],
})
export class SyncModule {}
