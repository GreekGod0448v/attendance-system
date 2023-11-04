import { Controller  , Get , Body} from '@nestjs/common';
import { LoginService } from '../../servise/login/login.service'
import {LoginDto} from '../../dto/login/login.dto'
@Controller('login')
export class LoginController {
    constructor(private readonly LoginService : LoginService){}
    @Get()
    login(@Body('data') data : LoginDto){
        return this.LoginService.login(data)
    }
}
