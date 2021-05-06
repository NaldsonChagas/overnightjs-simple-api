import {getManager} from "typeorm";
import {BankAccount} from "@src/entities/BankAccount";

export class BankAccountRepository {
  private entityManager = getManager()

  public create(bankAccount: BankAccount): Promise<BankAccount> {
    return this.entityManager.save(BankAccount, bankAccount)
  }

}
