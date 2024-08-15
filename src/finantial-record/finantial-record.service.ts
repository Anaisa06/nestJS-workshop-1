import { Injectable } from '@nestjs/common';
import { CreateFinantialRecordDto } from './dto/create-finantial-record.dto';
import { UpdateFinantialRecordDto } from './dto/update-finantial-record.dto';

@Injectable()
export class FinantialRecordService {
  create(createFinantialRecordDto: CreateFinantialRecordDto) {
    return 'This action adds a new finantialRecord';
  }

  findAll() {
    return `This action returns all finantialRecord`;
  }

  findOne(id: number) {
    return `This action returns a #${id} finantialRecord`;
  }

  update(id: number, updateFinantialRecordDto: UpdateFinantialRecordDto) {
    return `This action updates a #${id} finantialRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} finantialRecord`;
  }
}
