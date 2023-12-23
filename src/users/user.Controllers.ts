import { UserDto } from './user.dto';
import { UserService } from './user.service';
import { Body, Controller } from "@nestjs/common";

@Controller()

export class UserController{
        constructor(private readonly UserService : UserService)
        {
                
        }

        createUser(@Body() user : UserDto):UserDto{
                return null;
        }
}