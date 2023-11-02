import { Entity, Column, ManyToOne } from 'typeorm';
import {Attendance} from './attendance.model'
@Entity()
export class UsersInfo{
    @Column()
    username : number ;
     @Column()
     password : number ; 
     @Column()
     @ManyToOne(() => Attendance, (attendance) => attendance.user)
     attendance : Attendance[]
}