import {Controller, Get, Param, ParseIntPipe} from '@nestjs/common';
import {User, UserService} from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get()
    getUser() : User[] {
        return this.userService.getUser()
    }
    @Get(":id")
    getUserById(@Param("id", ParseIntPipe)id : number) : User {
        return this.userService.getUserById(id)
    }
}
