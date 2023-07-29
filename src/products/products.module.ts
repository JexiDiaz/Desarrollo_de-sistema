import {     Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    providers: [
    // aqui van los servicios
],
controllers: [
    //Aqui van los controladorres
],
   
})
export class ProductsModule{}