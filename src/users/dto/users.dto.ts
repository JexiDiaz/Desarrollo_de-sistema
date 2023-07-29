import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
    

    export class CreateProductDto {
        @IsNotEmpty()
        @IsNumber()
        id: number;
         

        @IsString()
        @IsNotEmpty()
        @MaxLength(100)
        name: string;

        @IsString()
        @IsNotEmpty()
        @MaxLength(300)
        password: string;


        @IsString()
        @IsNotEmpty()
        @MaxLength(300)
        email: string;

        @IsNumber()
        @IsNotEmpty()
        sexo: number;

        @IsString()
        @IsNotEmpty()
        @MaxLength(300)
        active:  boolean;

    }