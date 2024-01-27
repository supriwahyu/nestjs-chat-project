import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ProfilesController } from './profiles.controller';
import { ProfileSchema, Profile } from './schemas/profile.schema';
import { ProfilesService } from './profiles.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Profile.name, schema: ProfileSchema }])],
  controllers: [ProfilesController],
  providers: [ProfilesService],
  exports: [ProfilesService]
})
export class ProfilesModule {}
