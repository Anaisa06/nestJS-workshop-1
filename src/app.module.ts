import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { MicrocreditsModule } from './microcredits/microcredits.module';
import { FinantialRecordModule } from './finantial-record/finantial-record.module';
import { User } from './users/entities/user.entity';
import { Microcredit } from './microcredits/entities/microcredit.entity';
import { FinancialRecord } from './finantial-record/entities/finantial-record.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'MySQLpassword.123',
    database: 'workshop_1',
    entities: [User, Microcredit, FinancialRecord],
    synchronize: true
  }), UsersModule, MicrocreditsModule, FinantialRecordModule]
})
export class AppModule {}
