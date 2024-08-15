import { Injectable } from '@nestjs/common';
import { CreateMicrocreditDto } from './dto/create-microcredit.dto';
import { UpdateMicrocreditDto } from './dto/update-microcredit.dto';
import { User } from 'src/users/entities/user.entity';
import { Microcredit } from './entities/microcredit.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MicrocreditStatus } from 'src/common/enums/microcredit-states.enum';

@Injectable()
export class CreditCalculationService {

  calculateInterestRate(user: User): number {
    return user.creditScore > 700 ? 5 : 15;
  }
}

@Injectable()
export class MicrocreditRegistryService {
  constructor(@InjectRepository(Microcredit) private microcreditsRepository: Repository<Microcredit>) {}

  async saveMicrocredit(microcredit: Partial<Microcredit>): Promise<Microcredit> {
    return await this.microcreditsRepository.save(microcredit);
  }
}

@Injectable()
export class MicrocreditsService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly creditCalculationService: CreditCalculationService,
    private readonly microcreditRegistryService: MicrocreditRegistryService
  ) {}

  async applyForMicrocredit(createMicrocreditDto: CreateMicrocreditDto): Promise<Microcredit> {
    const user: User = await this.userRepository.findOne({ where: { id: createMicrocreditDto.userId }});
    const interestRate: number = this.creditCalculationService.calculateInterestRate(user);
    const newMicrocredit: Partial<Microcredit> = {
      user,
      amount: createMicrocreditDto.amount,
      interestRate,
      status: MicrocreditStatus.NEW
    }
    return await this.microcreditRegistryService.saveMicrocredit(newMicrocredit);
  }
}
