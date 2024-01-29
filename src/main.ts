import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'
import helmet from 'helmet'
import { WsAdapter } from '@nestjs/platform-ws' // <---
import { Logger, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { MicroserviceOptions } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    origin: '*',
    credentials: true
  })
  app.use(cookieParser())
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  )
  const logger = new Logger('Main')

  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}`],
      queue: process.env.RABBITMQ_QUEUE_NAME,
      queueOptions: {
        durable: false
      },
    },
  });

  app.startAllMicroservices()

  app.setGlobalPrefix('api')
  app.useGlobalFilters(new HttpExceptionFilter());

  app.use(helmet())
  app.useWebSocketAdapter(new WsAdapter(app)) // <---
  await app.listen(AppModule.port)

  // log docs
  const baseUrl = AppModule.getBaseUrl(app)
  const url = `http://${baseUrl}:${AppModule.port}`
  logger.log(`API Documentation available at ${url}/docs`);
}
bootstrap();