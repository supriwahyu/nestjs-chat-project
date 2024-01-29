import { Test } from '@nestjs/testing';
import { UsersModule } from './users.module';


describe('UsersModule', () => {
  it('should compile the module', async () => {
    const module = await Test.createTestingModule({
      providers: [UsersModule],
    }).compile();
  });
  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});