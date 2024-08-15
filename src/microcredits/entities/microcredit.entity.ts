import { MicrocreditStatus } from "src/common/enums/microcredit-states.enum";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('microcredits')
export class Microcredit {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(() => User, (user) => user.microcredits)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ type: "float" })
    amount: number;

    @Column({ type: 'float', name: 'interest_rate' })
    interestRate: number;

    @Column({ type: 'enum', enum: MicrocreditStatus })
    status: MicrocreditStatus;
}
