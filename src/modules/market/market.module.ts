import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemController } from "./controllers/item.controller";
import { ItemEntity } from "./entities/item.entity";
import { ItemService } from "./services/item.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ItemEntity
    ])
  ],
  controllers: [
    ItemController
  ],
  providers: [
    ItemService
  ]
})
export class MarketModule {}