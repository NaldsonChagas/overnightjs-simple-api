import {BankAccount} from "@src/models/BankAccount"

export class BankAccountRepository {
  private readonly bankAccounts: Array<BankAccount> = []

  private increaseId(bankAccount: BankAccount) {
    if (this.bankAccounts.length < 1) {
      bankAccount.setId(1)
      return bankAccount
    }
    const lastSavedAccount: BankAccount = this
      .bankAccounts[this.bankAccounts.length - 1]
    const lastId = lastSavedAccount.getId()
    bankAccount.setId(lastId + 1)
    return bankAccount
  }

  public create(bankAccount: BankAccount): BankAccount {
    bankAccount = this.increaseId(bankAccount)
    this.bankAccounts.push(bankAccount)
    return bankAccount
  }

  public getBankAccounts() {
    return this.bankAccounts
  }
}
