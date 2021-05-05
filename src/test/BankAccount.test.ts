import {BankAccount} from "@src/models/BankAccount";
import {Person} from "@src/models/Person";

describe('Test Bank Account functionalities', () => {

  it('should deposit value in account', () => {
    const person = new Person('User test', '067.456.456-45', 45)
    const bankAccount = new BankAccount(person, 100, '45657-4')
    bankAccount.deposit(420.0)

    expect(bankAccount.getBalance()).toBe(520.0)
  })

  it('should withdraw value in account', () => {
    const person = new Person('User test', '067.456.456-45', 45)
    const bankAccount = new BankAccount(person, 100, '45657-4')
    bankAccount.withdraw(45)

    expect(bankAccount.getBalance()).toBe(55)
  })

    // it('should withdraw value in account', () => {
  //   const person1 = new Person('User test', '067.456.456-45', 45)
  //   const person2 = new Person('User test 2', '069.457.416-40', 45)
  //
  //   const bankAccount = new BankAccount(person1, 1000, '45657-4')
  //   const bankAccount2 = new BankAccount(person2, 3500, '45657-4')
  //
  //   bankAccount.transfer()
  //
  // })

})
