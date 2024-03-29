import { Module } from '@nestjs/common';
import { ChatsController } from './chats.controller';
import { ChatsService } from './chats.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/schemas/user.schema';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Message } from './message.schema';
import { MessageSchema } from './message.schema';
import { ChatGateway } from './chat.gateway';


@Module({
  imports: [MongooseModule.forFeature([
    { name: Message.name, schema: MessageSchema }
  ]),
  MongooseModule.forFeature([
    { name: User.name, schema: UserSchema }
  ])
],
  controllers: [ChatsController],
  providers: [ChatsService, AuthService, UsersService, JwtService, ChatGateway]
})
export class ChatsModule {}