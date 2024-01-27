import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile, ProfileDocument } from './schemas/profile.schema';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
    constructor(@InjectModel(Profile.name) private profileModel: Model<ProfileDocument>) {}

    async create(createProfileDto: CreateProfileDto): Promise<ProfileDocument> {
        const createdProfile = new this.profileModel(createProfileDto)
        return createdProfile.save()
    }


    async findAll(): Promise<ProfileDocument[]> {
        return this.profileModel.find().exec()
    }


    async findById(id: string): Promise<ProfileDocument> {
        const profile = await this.profileModel.findById(id).exec()

        if (!profile) throw new HttpException('Profile not found', HttpStatus.NOT_FOUND)

        return profile
    }

    async findByName(name: string): Promise<ProfileDocument> {
        return this.profileModel.findOne({ name })

    }

    async update(id: string, updateProfileDto: UpdateProfileDto): Promise<ProfileDocument>  {
        const profile = await this.profileModel.findByIdAndUpdate(id, updateProfileDto, { new: true }).exec()

        if (!profile) throw new HttpException('Profile not found', HttpStatus.NOT_FOUND)

        return profile
    }

    async remove(id: string):  Promise<ProfileDocument> {
        const profile = await this.profileModel.findByIdAndDelete(id).exec()

        if (!profile) throw new HttpException('Profile not found', HttpStatus.NOT_FOUND)

        return profile
    }
}
