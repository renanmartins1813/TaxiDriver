import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RideService } from './ride.service';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';

@Controller('ride')
export class RideController {
  constructor(private readonly rideService: RideService) { }

  @Post('/estimate')
  estimate() {
    return this.rideService.estimate()
  }

  @Post('/confirm')
  create(@Body() createRideDto: CreateRideDto) {
    return this.rideService.create(createRideDto);
  }

  @Get(':userId/:driverId')
  findOne(@Param('userId') userId: number, @Param('driverId') driverId: number) {
    if (typeof driverId !== 'undefined') {
      return `userId: ${userId} and driverId: ${driverId}`
    }

    return this.rideService.findOne(+userId);
  }
}
