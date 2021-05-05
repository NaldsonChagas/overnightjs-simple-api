import {Person} from "@src/models/Person"
import {Model} from "@src/models/utils/Model"

export class BankAccount extends Model {

  private id = 0

  constructor(
    private owner: Person,
    private balance: number,
    private accountNumber: string,
  ) {
    super()
    this.validate([owner, balance, accountNumber])
  }

  public getId(): number {
    return this.id
  }

  public setId(id: number): void {
    this.id = id
  }
}
