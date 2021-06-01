import { Person } from '@src/entities/Person'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { IsNotEmpty, IsString } from 'class-validator'
import { BankAccountTransitionError } from '@src/util/errors/BankAccountTransitionError'

@Entity()
export class BankAccount {
  @PrimaryGeneratedColumn()
  private readonly id: number

  @OneToOne(() => Person, { nullable: false })
  @JoinColumn()
  private owner: Person

  @Column({
    type: 'float',
    nullable: false,
  })
  private balance: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  @IsNotEmpty()
  @IsString()
  private accountNumber: string

  @CreateDateColumn({ name: 'created_at' })
  private createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  private updatedAt: Date

  constructor(
    owner: Person,
    balance: number,
    accountNumber: string,
    id?: number
  ) {
    this.owner = owner
    this.balance = balance
    this.accountNumber = accountNumber
    this.id = id || this.id
  }

  public deposit(value: number): void {
    if (value < 0) {
      throw new BankAccountTransitionError("Can't deposit a negative value")
    }
    this.balance += value
  }

  public withdraw(value: number): void {
    if (value > this.balance) {
      throw new BankAccountTransitionError(
        "Can't withdraw value greater than balance"
      )
    }
    this.balance -= value
  }

  public transfer(value: number, bankDestiny: BankAccount): void {
    if (value > this.balance) {
      throw new BankAccountTransitionError(
        "Can't transfer value greater than balance"
      )
    }
    this.balance -= value
    bankDestiny.deposit(value)
  }

  public getBalance(): number {
    return this.balance
  }
}
