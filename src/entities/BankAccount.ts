import {Person} from "@src/entities/Person"
import {Model} from "@src/entities/utils/Model"

export class BankAccount extends Model {
  constructor(
    private owner: Person,
    private balance: number,
    private accountNumber: string,
  ) {
    super()
    this.validate([owner, balance, accountNumber])
  }

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
