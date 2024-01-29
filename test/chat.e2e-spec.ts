import { Test, TestingModule } from '@nestjs/testing';
import { ChatGateway } from 'src/chats/chat.gateway';
import { ChatsService } from 'src/chats/chats.service';
import { MessageDto } from 'src/chats/dto/message.dto';
import { Server, Socket } from 'socket.io';
import { UsersService } from 'src/users/users.service';
import { AuthService } from 'src/auth/auth.service';
import { ProfilesService } from 'src/profile/profiles/profiles.service';

// Mock ChatsService
const mockChatsService = {
  getUserFromSocket: jest.fn(),
  createMessage: jest.fn(),
  getAllMessages: jest.fn(),
};


describe('ChatGateway', () => {
  let gateway: ChatGateway;
  let serverMock: Server;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChatGateway,
        UsersService,
        AuthService,
        ProfilesService,
        { provide: ChatsService, useValue: mockChatsService },
      ],
    }).compile();
  
    gateway = module.get<ChatGateway>(ChatGateway);
  
    // Mock the WebSocket server instance
    gateway.server = {
      sockets: {
        emit: jest.fn(), // Mock the emit function
      },
    } as any;
  });
  

  it('should handle connection', async () => {
    const socketMock = {} as Socket;
    mockChatsService.getUserFromSocket.mockResolvedValueOnce({ _id: 'userId' });

    await gateway.handleConnection(socketMock);

    expect(mockChatsService.getUserFromSocket).toHaveBeenCalledWith(socketMock);
  });

  it('should listen for messages and emit receive_message event', async () => {
    const socketMock = {} as Socket;
    const message: MessageDto = { message: 'Hello'};
    const newMessage = { ...message, _id: 'messageId' };
    mockChatsService.getUserFromSocket.mockResolvedValueOnce({ _id: 'userId' });
    mockChatsService.createMessage.mockResolvedValueOnce(newMessage);

    await gateway.listenForMessages(message, socketMock);

    expect(mockChatsService.getUserFromSocket).toHaveBeenCalledWith(socketMock);
    expect(mockChatsService.createMessage).toHaveBeenCalledWith(message, 'userId');
    expect(serverMock.emit).toHaveBeenCalledWith('receive_message', newMessage);
  });

  it('should get all messages and emit receive_message event', async () => {
    const socketMock = {} as Socket;
    const messages = [{ _id: '1', text: 'Message 1' }, { _id: '2', text: 'Message 2' }];
    mockChatsService.getUserFromSocket.mockResolvedValueOnce({ _id: 'userId' });
    mockChatsService.getAllMessages.mockResolvedValueOnce(messages);

    await gateway.getAllMessages(socketMock);

    expect(mockChatsService.getUserFromSocket).toHaveBeenCalledWith(socketMock);
    expect(mockChatsService.getAllMessages).toHaveBeenCalled();
    expect(serverMock.emit).toHaveBeenCalledWith('receive_message', messages);
  });
});
