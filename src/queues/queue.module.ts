import { Module } from '@nestjs/common';
import { ConsumerService } from './consumer.file';
import { ProducerService } from './producer.file';
import { ChatsService } from 'src/chats/chats.service';
import { AuthService } from 'src/auth/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from 'src/chats/message.schema';
import { User, UserSchema } from 'src/users/schemas/user.schema';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Message.name, schema: MessageSchema }
  ]),
  MongooseModule.forFeature([
    { name: User.name, schema: UserSchema }
  ])
],
  providers: [ProducerService, ConsumerService, ChatsService, AuthService, UsersService, JwtService],
  exports: [ProducerService],
})
export class QueueModule {}