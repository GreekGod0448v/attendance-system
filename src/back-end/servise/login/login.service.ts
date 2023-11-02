import { Injectable } from '@nestjs/common';
import {db} from '../../app.module'
import {UsersInfo} from '../../model/usersInfo.model'
@Injectable()
export class LoginService {
    async login(username , password){
      let isUser : boolean = false;   
      let isPassword : boolean = false;   
      let usersInfoTable = db.getRepository(UsersInfo);
      let queryBuilder = usersInfoTable.createQueryBuilder('usersInfo');
      let userInfo : UsersInfo[] = await queryBuilder.getMany();
         userInfo.map((user)=>{
          if(username === user.username){
            isUser = true ;
          }
        })
        if(isUser){
          userInfo.map((user)=>{
            if(password = user.username ){
              return true ;  
            }
            else{
              return 'invalid password'
            }
          })
        }
        else{
          return 'invalid username'
        }
    }
}
