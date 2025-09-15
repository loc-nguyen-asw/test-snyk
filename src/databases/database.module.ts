import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dbEntities from './entities';

const entities = (
  Object.keys(dbEntities) as Array<keyof typeof dbEntities>
).map((key) => dbEntities[key]);

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        synchronize: true,
        keepConnectionAlive: false,
        multipleStatements: true,
        logging: false,
        entities,
        extra: {
          connectionLimit: 10,
          waitForConnections: true,
          queueLimit: 0,
          enableKeepAlive: true,
          keepAliveInitialDelay: 10000,
          connectTimeout: 10000,
          acquireTimeout: 10000,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  exports: [],
})
export class DatabaseModule {}
