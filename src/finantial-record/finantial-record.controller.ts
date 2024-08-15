import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinantialRecordService } from './finantial-record.service';
import { CreateFinantialRecordDto } from './dto/create-finantial-record.dto';
import { UpdateFinantialRecordDto } from './dto/update-finantial-record.dto';

@Controller('finantial-record')
export class FinantialRecordController {
  constructor(private readonly finantialRecordService: FinantialRecordService) {}

  @Post()
  create(@Body() createFinantialRecordDto: CreateFinantialRecordDto) {
    return this.finantialRecordService.create(createFinantialRecordDto);
  }

  @Get()
  findAll() {
    return this.finantialRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.finantialRecordService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFinantialRecordDto: UpdateFinantialRecordDto) {
    return this.finantialRecordService.update(+id, updateFinantialRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.finantialRecordService.remove(+id);
  }
}
