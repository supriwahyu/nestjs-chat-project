import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProfileDocument = Profile & Document;

@Schema({
    toJSON: {
        getters: true,
        virtuals: true,
    },
    timestamps: true,
})

export class Profile {

    @Prop({ required: true})
    name: string;  

    @Prop()
    gender: string; 

    @Prop()
    birthday: string;  

    @Prop()
    horoscope: string; 

    @Prop()
    zodiac: string;

    @Prop()
    height: string;

    @Prop()
    weight: string;

}

const ProfileSchema = SchemaFactory.createForClass(Profile)

export { ProfileSchema };
