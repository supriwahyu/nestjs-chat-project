import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateProfileDto {
    @ApiProperty({
        type: String,
        description: 'its name for your profile.',
        example: 'danny',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({
        type: String,
        description: 'your gender.',
        example: '',
    })
    @IsString()
    gender: string

    @ApiProperty({
        type: String,
        description: 'your birthday.',
        example: '',
    })
    @IsString()
    birthday: string

    @ApiProperty({
        type: String,
        description: 'horoscope',
        example: '',
    })
    @IsString()
    horoscope: string

    @ApiProperty({
        type: String,
        description: 'your zodiac.',
        example: '',
    })
    @IsString()
    zodiac: string

    @ApiProperty({
        type: String,
        description: 'your height.',
        example: '',
    })
    @IsString()
    height: string

    @ApiProperty({
        type: String,
        description: 'your weight.',
        example: '',
    })
    @IsString()
    weight: string
}