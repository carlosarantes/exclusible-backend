import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthUserDto, CreateUserDto } from './user.dto';
import { User } from './user.model';
import { hashSync } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel('Users') private readonly usersModel: Model<User>) {}

  async create(dto: CreateUserDto): Promise<unknown> {
    const userFound = await this.findByEmail(dto.email);

    if (!!userFound)
      throw new ConflictException('This email is already in use');

    return await this.usersModel.create({
      ...dto,
      password: hashSync(dto.password, 10),
    });
  }

  async getAllUsers(): Promise<unknown> {
    return await this.usersModel.find().exec();
  }

  async getUserById(id: string): Promise<unknown> {
    return await this.usersModel.findById(id);
  }

  async deleteUser(id: string): Promise<unknown> {
    return await this.usersModel.findByIdAndDelete(id);
  }

  async findByEmail(email: string): Promise<unknown> {
    try {
      return await this.usersModel.findOne({ email }).exec();
    } catch (error) {
      return null;
    }
  }
}
