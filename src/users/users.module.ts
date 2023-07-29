import {     Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Users])],
    providers: [
    // aqui van los servicios
],
controllers: [
    //Aqui van los controladorres
],
   
})
export class UsersModule{}