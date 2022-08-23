import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dtos';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async register(@Body() dto: CreateUserDto): Promise<unknown> {
    return this.userService.create(dto);
  }

  @ApiBearerAuth()
  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getAllUsers(): Promise<unknown> {
    return this.userService.getAllUsers();
  }

  @ApiBearerAuth()
  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async getUserById(@Param('id') id: string): Promise<unknown> {
    return this.userService.getUserById(id);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(AuthGuard('jwt'))
  async deleteUser(@Param('id') id: string): Promise<unknown> {
    return this.userService.deleteUser(id);
  }
}
