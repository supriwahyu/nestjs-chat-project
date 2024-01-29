import { Test } from '@nestjs/testing';
import { ProfilesModule } from './profiles.module';


describe('ProfilesModule', () => {
  it('should compile the module', async () => {
    const module = await Test.createTestingModule({
      providers: [ProfilesModule],
    }).compile();
  });
  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});