import { Module } from '@nestjs/common';
import { MicrocreditsService } from './microcredits.service';
import { MicrocreditsController } from './microcredits.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Microcredit } from './entities/microcredit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Microcredit])],
  controllers: [MicrocreditsController],
  providers: [MicrocreditsService],
})
export class MicrocreditsModule {}
