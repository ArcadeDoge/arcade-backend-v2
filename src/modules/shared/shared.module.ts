import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PublicEntity } from "./entities/public.entity";

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      PublicEntity
    ])
  ]
})
export class SharedModule {}