import { Injectable } from '@nestjs/common';
import {db} from '../../app.module'
import {UsersInfo} from '../../model/usersInfo.model'
import {LoginType} from '../../type/login/login.type' ;
@Injectable()
export class LoginService {
    
   async  login({username , password} : LoginType ) {
      let isUser : boolean = false;      
      let usersInfoTable = db.getRepository(UsersInfo);
      let queryBuilder = usersInfoTable.createQueryBuilder('usersInfo');
      let userInfo : UsersInfo[] = await queryBuilder.getMany();
        for(let user of userInfo){
          if(user.username == username && user.password == password ){
            isUser = true
            break ; 
          }
          return isUser
        }
    }
}
