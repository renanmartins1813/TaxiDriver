import { Injectable } from '@nestjs/common';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RideService {
  constructor(private readonly prismaService: PrismaService) { }

  async getRoute(origin: string, destination: string) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json ',
        'X-Goog-Api-Key': process.env.GOOGLE_API_KEY,
        'X-Goog-FieldMask': '*'
      },
      body: '{"origin":{"address":"Liberdade, São Paulo - SP"},"destination":{"address":"SHOPPER COMERCIO ALIMENTICIO LTDA, Rua Achilles Orlando Curtolo, 646 - Parque Industrial Tomas Edson, São Paulo - SP, 01144-010"},"travelMode":"DRIVE"}'
    };
    let data

    await fetch('https://routes.googleapis.com/directions/v2:computeRoutes', options)
      .then(response => response.json())
      .then(response => data = response.routes[0].legs[0])
      .catch(err => console.error(err));

    return data
  }


  async estimate(createRideDto: CreateRideDto) {
    return await this.getRoute('a', 'b')
  }

  create(updateRideDto: UpdateRideDto) {
    return 'This action adds a new ride';
  }

  findOne(id: number) {
    return `This action returns a #${id} ride`;
  }
}
