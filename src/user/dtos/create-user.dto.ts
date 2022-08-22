import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, Matches, IsOptional } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Name of the user that will be created',
    example: 'Carlos',
    required: true,
  })
  @IsNotEmpty()
  @MinLength(4)
  readonly name: string;

  @ApiProperty({
    description: 'Email of the user that will be created',
    example: 'carl.test@hotmail.com',
    required: true,
  })
  @IsNotEmpty()
  @MinLength(10)
  @Matches(/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/)
  readonly email: string;

  @ApiProperty({
    description: 'Password of the user that will be created',
    example: 'AS2AS211sS#',
    required: true,
  })
  @IsNotEmpty()
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/)
  readonly password: string;

  @ApiProperty({
    description: 'Role of the user that will be created',
    example: 'ADMIN',
    required: false,
  })
  @IsOptional()
  readonly role: string;
}
