import { PartialType } from '@nestjs/mapped-types';
import { CreateFinantialRecordDto } from './create-finantial-record.dto';

export class UpdateFinantialRecordDto extends PartialType(CreateFinantialRecordDto) {}
