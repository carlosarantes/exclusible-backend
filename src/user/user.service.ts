import { ConflictException, Injectable } from '@nestjs/common';

import { AuthUserDto, CreateUserDto } from './user.dto';

import { hashSync } from 'bcrypt';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  async create(dto: CreateUserDto): Promise<unknown> {
    const userFound = await this.findByEmail(dto.email);

    if (!!userFound)
      throw new ConflictException('This email is already in use');

    const user = this.usersRepository.create(dto);
    return await this.usersRepository.save(user);
  }

  async getAllUsers(): Promise<unknown> {
    return await this.usersRepository.find({
      select: ['id', 'name', 'email', 'role'],
    });
  }

  async getUserById(id: string): Promise<unknown> {
    return await this.usersRepository.findOneBy({ id });
  }

  async deleteUser(id: string): Promise<unknown> {
    return await this.usersRepository.delete({ id });
  }

  async findByEmail(email: string): Promise<unknown> {
    return await this.usersRepository.findOneBy({ email });
  }
}
