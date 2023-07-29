import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn({type: 'int4' }) 
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 300, nullable: false })
    password: string;

    @Column({ type: 'int4', nullable: false})
    email: number;

    @Column({ type: 'int4', nullable: false})
    sexo: number;
    

    @Column({type: 'boolean', default: true})
    active: boolean;
    
}