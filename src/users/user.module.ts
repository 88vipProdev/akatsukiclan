import { Module } from "@nestjs/common";


import { UserEntity } from "./user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./user.Controllers";
import { UserService } from "./user.service";


@Module({

      imports:[
        TypeOrmModule.forFeature([UserEntity])
      ],
      controllers:[UserController],
      providers:[UserService]

})
export class UserModule{}
