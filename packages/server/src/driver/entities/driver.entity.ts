import { Driver as DriverModel } from "@prisma/client";

export class DriverEntity implements DriverModel {
  id: number;
  name: string;
  description: string;
  car: string;
  rating: number;
  minimumKmRate: number;
}
