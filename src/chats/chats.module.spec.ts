import { Test } from '@nestjs/testing';
import { ChatsModule } from './chats.module';


describe('ChatsModule', () => {
  it('should compile the module', async () => {
    const module = await Test.createTestingModule({
      providers: [ChatsModule],
    }).compile();
  });
  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});