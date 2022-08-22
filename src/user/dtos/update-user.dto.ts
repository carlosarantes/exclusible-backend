import { ApiProperty } from '@nestjs/swagger';
import { MinLength, Matches, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty()
  @IsOptional()
  @MinLength(4)
  readonly name: string;

  @ApiProperty()
  @IsOptional()
  @MinLength(10)
  readonly email: string;

  @ApiProperty()
  @IsOptional()
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/)
  readonly password: string;

  @ApiProperty()
  @IsOptional()
  readonly role: string;
}
