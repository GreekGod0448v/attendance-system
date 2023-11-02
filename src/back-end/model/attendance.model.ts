import { Entity, Column, OneToMany } from 'typeorm';
import {UsersInfo} from './usersInfo.model'
@Entity()
export class Attendance {
    @Column()
    description : string 
    @Column()
    link : string 
    @Column()
    @OneToMany(() => UsersInfo, (usersInfo) => usersInfo.attendance)
    user : UsersInfo

}