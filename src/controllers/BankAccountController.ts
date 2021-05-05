/*
  Here will only simulate database transactions. So only methods will
  be in integration folder. But only for study
 */
import {Request, Response} from "express"
import {BankAccount} from "@src/models/BankAccount"
import {Controller, Post} from "@overnightjs/core"
import {BankAccountRepository} from "@src/repositories/BankAccountRepository"
import {PersonRepository} from "@src/repositories/PersonRepository";

@Controller('bank-account')
export class BankAccountController {

  private bankAccountRepository = new BankAccountRepository()
  private personRepository = new PersonRepository()

  @Post('/')
  public create(req: Request, res: Response): void {
    const bankAccount = req.body

    const {balance, accountNumber, ownerId} = bankAccount

    try {
      const person = this.personRepository.findById(ownerId)
      const bankAccountModel = new BankAccount(person, balance, accountNumber)
      this.bankAccountRepository.create(bankAccountModel)

      res.send({
        message: 'Success',
        bankAccount: bankAccountModel
      })
    } catch (error) {
      console.log(error)
      res.status(500).send("Can't save this. Internal server error")
    }
  }
}
