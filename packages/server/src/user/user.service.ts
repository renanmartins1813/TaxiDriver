import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    return await this.prismaService.user.create({
      data: createUserDto
    })
  }

  async findAll() {
    return await this.prismaService.user.findMany()
  }

  async findOne(id: number) {
    return await this.prismaService.user.findUnique({
      where: {
        id,
      },
    })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prismaService.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    })
  }

  remove(id: number) {
    return this.prismaService.user.delete({
      where: {
        id,
      },
    })
  }
}
