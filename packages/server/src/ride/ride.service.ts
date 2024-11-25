import { Injectable } from '@nestjs/common';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RideService {
  constructor(private readonly prismaService: PrismaService) { }

  estimate() {
    return 'One day you will receive the estimated ride value'
  }

  create(createRideDto: CreateRideDto) {
    return 'This action adds a new ride';
  }

  findOne(id: number) {
    return `This action returns a #${id} ride`;
  }
}
