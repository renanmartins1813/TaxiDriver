import { Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DriverService {
  constructor(private readonly prismaService: PrismaService) { }

  async create(createDriverDto: CreateDriverDto) {
    return await this.prismaService.driver.create({
      data: createDriverDto
    })
  }

  async findAll() {
    return await this.prismaService.driver.findMany()
  }

  async findOne(id: number) {
    return await this.prismaService.driver.findUnique({
      where: {
        id: id,
      },
    })
  }

  async update(id: number, updateDriverDto: UpdateDriverDto) {
    return await this.prismaService.driver.update({
      where: {
        id,
      },
      data: updateDriverDto,
    })
  }

  async remove(id: number) {
    return await this.prismaService.driver.delete({
      where: {
        id,
      },
    })
  }
}
