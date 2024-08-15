import { FinantialRecordType } from 'src/common/enums/finantial-record-type.enum';
import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('financial_records')
export class FinancialRecord {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ name: 'record_type', type: 'enum', enum: FinantialRecordType })
  recordType: FinantialRecordType;

  @Column()
  amount: number;

  @Column({ type: 'date' })
  date: Date;

  @ManyToOne(() => User, (user) => user.financialHistory)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
