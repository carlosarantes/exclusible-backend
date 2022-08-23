import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthUserDto } from 'src/user/dtos';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody({ type: AuthUserDto })
  @UseGuards(AuthGuard('local'))
  @Post()
  async auth(@Req() req: any): Promise<unknown> {
    return this.authService.login(req.user);
  }
}
