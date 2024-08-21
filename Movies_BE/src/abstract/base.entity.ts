
import { ApiProperty } from '@nestjs/swagger';
import { CreateDateColumn, Index, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseEntity {

    @ApiProperty({ description: 'created at' })
    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @ApiProperty({ description: 'updated at' })
    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}


export abstract class BaseEntityWithId extends BaseEntity {
    @ApiProperty({ description: 'uuid' })
    @PrimaryGeneratedColumn('uuid')
    id: string;
}