import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityWithId } from "src/abstract/base.entity"
import { Column, Entity } from "typeorm";

@Entity()
export class Users extends BaseEntityWithId {

    @ApiProperty({ description: 'email' })
    @Column({ type: 'varchar', length: 100, default: null })
    email: string;

    @ApiProperty({ description: 'password' })
    @Column({ type: 'text', default: null })
    password: string;

}


