import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DiscussionController } from "./controllers/discussion.controller";
import { StuffController } from "./controllers/stuff.controller";
import { DiscussionEntity } from "./entities/discussion.entity";
import { LikesEntity } from "./entities/likes.entity";
import { StuffEntity } from "./entities/stuff.entity";
import { DiscussionService } from "./services/discussion.service";
import { LikesService } from "./services/likes.service";
import { StuffService } from "./services/stuff.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DiscussionEntity,
      LikesEntity,
      StuffEntity
    ])
  ],
  controllers: [
    DiscussionController,
    StuffController
  ],
  providers: [
    DiscussionService,
    LikesService,
    StuffService
  ]
})
export class DiscussionModule {}