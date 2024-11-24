import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RideModule } from './ride/ride.module';

@Module({
  imports: [PrismaModule, RideModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
