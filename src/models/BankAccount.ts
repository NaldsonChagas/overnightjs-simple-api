import {Person} from "@src/models/Person"
import {Model} from "@src/models/utils/Model"

export class BankAccount extends Model {
  constructor(
    private owner: Person,
    private balance: number,
    private accountNumber: string,
  ) {
    super()
    this.validate([owner, balance, accountNumber])
  }
}
