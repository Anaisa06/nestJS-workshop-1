import { Module } from '@nestjs/common';
import { FinantialRecordService } from './finantial-record.service';
import { FinantialRecordController } from './finantial-record.controller';

@Module({
  controllers: [FinantialRecordController],
  providers: [FinantialRecordService],
})
export class FinantialRecordModule {}
