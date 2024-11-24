import { User as UserModel } from "@prisma/client";

export class UserEntity implements UserModel {
  id: number;
  name: string;
}
