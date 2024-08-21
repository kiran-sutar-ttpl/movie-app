import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateloginDto {

    @ApiProperty ( { description : 'username'})
    @IsString()
    email: string;

    @ApiProperty ( { description : 'password'})
    @IsString()
    password: string;
}