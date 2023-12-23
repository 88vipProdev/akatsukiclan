import { UserDto } from './user.dto';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";



@Injectable()

export class UserService{
        constructor(
                @InjectRepository(UserEntity)
                pricvate  ,readonly userRepository : Repository<UserEntity>
        ){}

        save(UserDto : UserDto ): Promise<UserDto>
        {
              const saveUser =  this.userRepository.save(UserDto);

        }
}