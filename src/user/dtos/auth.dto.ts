import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, Matches } from 'class-validator';

export class AuthUserDto {
  @ApiProperty({
    description: 'Email to login',
    example: 'user@test.com',
    required: true,
  })
  @IsNotEmpty()
  @MinLength(10)
  readonly email: string;

  @ApiProperty({
    description: 'Password to login',
    example: 'AssdAAs23',
    required: true,
  })
  @IsNotEmpty()
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/)
  readonly password: string;
}
