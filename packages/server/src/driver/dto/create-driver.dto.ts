import { OmitType } from "@nestjs/mapped-types";
import { DriverEntity } from "../entities/driver.entity";

export class CreateDriverDto extends OmitType(DriverEntity, ['id']) {

}
