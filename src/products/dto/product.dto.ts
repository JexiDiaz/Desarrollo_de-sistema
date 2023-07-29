import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
    

    export class CreateProductDto {
        @IsNotEmpty()
        @IsNumber()
        id: number;
        // LOS DECORADORES EN EL DTOVALIDAD QUE LA INFO QUE SE AGREGUE SEA LA CORRECTA 

        @IsString()
        @IsNotEmpty()
        @MaxLength(100)
        name: string;

        @IsString()
        @IsNotEmpty()
        @MaxLength(300)
        description: string;

        @IsNumber()
        @IsNotEmpty()
        price: number;

    }

