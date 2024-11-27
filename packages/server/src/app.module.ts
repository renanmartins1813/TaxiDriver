import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RideModule } from './ride/ride.module';
import { UserModule } from './user/user.module';
import { DriverModule } from './driver/driver.module';

@Module({
  imports: [PrismaModule, RideModule, UserModule, DriverModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
