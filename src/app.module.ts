import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule, ConfigService, registerAs } from '@nestjs/config';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
import {
  configuration as contractConfig,
  validationSchema as contractValidationSchema,
} from './config/contract.config';
import {
  configuration as defaultConfig,
  validationSchema as defaultValidationSchema,
} from './config/default.config';
import {
  configuration as databaseConfig,
  validationSchema as databaseValidationSchema,
} from './config/database.config';
import { LoggingInterceptor } from './interceptors/logging/logging.interceptor';
import { DiscussionModule } from './modules/discussion/discussion.module';
import { GameModule } from './modules/game/game.module';
import { MarketModule } from './modules/market/market.module';

console.log('NODE_ENV', process.env.NODE_ENV);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'development'
          ? '.env.development'
          : '.env.production',
      load: [
        registerAs('default', defaultConfig),
        registerAs('contract', contractConfig),
        registerAs('database', databaseConfig),
      ],
      validationSchema: Joi.object(
        Object.assign(
          defaultValidationSchema,
          contractValidationSchema,
          databaseValidationSchema
        )
      ),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.database'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        logging: configService.get('database.logging'),
      }),
    }),
    DiscussionModule,
    GameModule,
    MarketModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
