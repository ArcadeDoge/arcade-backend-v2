import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SyncController } from './controllers/sync.controller';
import { BlockNumberEntity } from './entities/blocknumber.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlockNumberEntity])],
  controllers: [SyncController],
  providers: [],
})
export class DiscussionModule {}
