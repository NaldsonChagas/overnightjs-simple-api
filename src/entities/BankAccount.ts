import {Person} from "@src/entities/Person"
import {Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, JoinColumn} from "typeorm"
import {IsNotEmpty, IsString} from "class-validator"

@Entity()
export class BankAccount {

  @PrimaryGeneratedColumn()
  private readonly id: number

  @OneToOne(() => Person, {nullable: false})
  @JoinColumn()
  private owner: Person

  @Column({
    type: 'float',
    nullable: false
  })
  private balance: number

  @Column({
    type: 'varchar',
    nullable: false
  })
  @IsNotEmpty()
  @IsString()
  private accountNumber: string

  @CreateDateColumn({name: 'created_at'})
  private createdAt: Date

  @UpdateDateColumn({name: 'updated_at'})
  private updatedAt: Date

  public deposit(value: number): void {
    this.balance += value
  }

  public withdraw(value: number): void {
    if (value > this.balance) {
      throw new Error("Can't withdraw value greater than balance")
    }
    this.balance -= value
  }

  public transfer(value: number, bankDestiny: BankAccount): void {
    if (value > this.balance) {
      throw new Error("Can't transfer value greater than balance")
    }
    this.balance -= value
    bankDestiny.deposit(value)
  }

  public getBalance(): number {
    return this.balance
  }
}
