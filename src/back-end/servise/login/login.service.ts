import { Injectable } from '@nestjs/common';
import {db} from '../../app.module'
import {UsersInfo} from '../../model/usersInfo.model'
import {LoginType} from '../../type/login/login.type' ;
@Injectable()
export class LoginService {
    
   async login({username , password} : LoginType ) { 
      let usersInfoTable = db.getRepository(UsersInfo);
      let queryBuilder = usersInfoTable.createQueryBuilder('usersInfo');
      let userInfo : UsersInfo[] = await queryBuilder.getMany();
      const isUser = userInfo.find(user => user.username === username && user.password === password) !== undefined;
        return isUser
    }
}
