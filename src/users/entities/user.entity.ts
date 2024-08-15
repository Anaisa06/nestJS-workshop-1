import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { FinancialRecord } from "src/finantial-record/entities/finantial-record.entity";
import { Microcredit } from "src/microcredits/entities/microcredit.entity";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ name: 'credit_score', type: 'float' })
    creditScore: number;

    @OneToMany(() => FinancialRecord, (financialRecord) => financialRecord.user)
    financialHistory: FinancialRecord[];
    
    @OneToMany(() => Microcredit, (microcredit) => microcredit.user)
    microcredits: Microcredit[];
}
