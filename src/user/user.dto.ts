import { IsNotEmpty, MinLength, Matches, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(4)
  readonly name: string;

  @IsNotEmpty()
  @MinLength(10)
  @Matches(/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/)
  readonly email: string;

  @IsNotEmpty()
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/)
  readonly password: string;

  @IsOptional()
  readonly role: string;
}

export class UpdateUserDto {
  @IsOptional()
  @MinLength(4)
  readonly name: string;

  @IsOptional()
  @MinLength(10)
  readonly email: string;

  @IsOptional()
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/)
  readonly password: string;

  @IsOptional()
  readonly role: string;
}

export class AuthUserDto {
  @IsNotEmpty()
  @MinLength(10)
  readonly email: string;

  @IsNotEmpty()
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/)
  readonly password: string;
}
