import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
  } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller()
export class ProfilesController {
    constructor(private readonly profilesService: ProfilesService) {}
  
    @Post('createProfile')
    create(@Body() createProfileDto: CreateProfileDto) {
      return this.profilesService.create(createProfileDto);
    }
  
    @Get('getProfile/:id')
    findById(@Param('id') id: string) {
      return this.profilesService.findById(id);
    }
  
    @Put('updateProfile/:id')
    update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
      return this.profilesService.update(id, updateProfileDto);
    }
  
    @Delete('updateProfile/:id')
    remove(@Param('id') id: string) {
      return this.profilesService.remove(id);
    }
}
