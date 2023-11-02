import { Module } from '@nestjs/common';
import { LoginService } from './servise/login/login.service';
import { LoginController } from './controller/login/login.controller';
import { DataSource } from 'typeorm'; 
import {Attendance} from './model/attendance.model'
import {UsersInfo} from './model/usersInfo.model'
@Module({
  imports: [],
  controllers: [LoginController],
  providers: [LoginService],
})
export class AppModule {}
export let db = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'postgres',
  synchronize: true,
  logging: false,
  entities: [UsersInfo , Attendance],
  migrations: [],
  subscribers: [],
});
db.initialize();