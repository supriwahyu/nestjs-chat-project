import { INestApplication, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ChatsModule } from './chats/chats.module';
import mongodbConfig from '././shared/config/mongodb.config';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [mongodbConfig]
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('mongodb.uri')
      }),
      inject: [ConfigService]
    }),
    ChatsModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly configService: ConfigService) {
      AppModule.port = process.env.PORT;
  }

  static getBaseUrl(app: INestApplication): string {
      let baseUrl = app.getHttpServer().address().address;
      if (baseUrl == '0.0.0.0' || baseUrl == '::') {
          return (baseUrl = 'localhost');
      }
  }
}