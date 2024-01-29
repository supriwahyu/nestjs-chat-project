import { INestApplication, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ChatsModule } from './chats/chats.module';
import mongodbConfig from '././shared/config/mongodb.config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profile/profiles/profiles.module';
import { ClientsModule } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices';
import { QueueModule } from './queues/queue.module';


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
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [`amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}`],
          queue: process.env.RABBITMQ_QUEUE_NAME,
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
    ChatsModule,
    AuthModule,
    UsersModule,
    ProfilesModule,
    QueueModule
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