import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityWithId } from "src/abstract/base.entity";
import { Users } from "src/auth/entity/users.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()

export class MovieRecord extends BaseEntityWithId {

    @ApiProperty({ description: 'title' })
    @Column({ type: 'varchar', length: 100, default: null })
    title: string;

    @ApiProperty({ description: 'publishingYear' })
    @Column({ type: 'varchar', default: null })
    publishingYear: string;

    @ApiProperty({ description: 'poster' })
    @Column({ type: 'bytea', nullable: true })
    poster: Buffer;

    @ApiProperty({ description: 'users'})
    @ManyToOne(()=>Users,{
        nullable : true,
        onDelete:'CASCADE'
    })
    @JoinColumn()
    users : string
}

