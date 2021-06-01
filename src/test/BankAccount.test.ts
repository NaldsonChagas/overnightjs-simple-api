import { BankAccount } from '@src/entities/BankAccount'
import { Person } from '@src/entities/Person'
import { BankAccountTransitionError } from '@src/util/errors/BankAccountTransitionError'

describe('Test Bank Account functionalities', () => {
  describe('Test deposit function', () => {
    test('should deposit value in account', () => {
      const person = new Person('User test', '067.456.456-45', 45)
      const bankAccount = new BankAccount(person, 100, '45657-4')
      bankAccount.deposit(420.0)

      expect(bankAccount.getBalance()).toBe(520.0)
    })

    test("shouldn't deposit negative values in account", () => {
      const person = new Person('User test', '067.456.456-45', 45)
      const bankAccount = new BankAccount(person, 100, '45657-4')

      expect(() => bankAccount.deposit(-200.0)).toThrow(
        BankAccountTransitionError
      )
    })
  })

  describe('Test withdraw function', () => {
    test('should withdraw value in account', () => {
      const person = new Person('User test', '067.456.456-45', 45)
      const bankAccount = new BankAccount(person, 100, '45657-4')
      bankAccount.withdraw(45)

      expect(bankAccount.getBalance()).toBe(55)
    })

    test("shouldn't withdraw value in account", () => {
      const person = new Person('User test', '067.456.456-45', 45)
      const bankAccount = new BankAccount(person, 100, '45657-4')

      expect(() => bankAccount.withdraw(450)).toThrow(
        BankAccountTransitionError
      )
    })
  })

  describe('Test transfer function', () => {
    test('should transfer value in account', () => {
      const person1 = new Person('User test', '067.456.456-45', 45)
      const person2 = new Person('User test 2', '069.457.416-40', 45)

      const bankAccount1 = new BankAccount(person1, 1000, '45657-4')
      const bankAccount2 = new BankAccount(person2, 3500, '45657-4')

      bankAccount1.transfer(500, bankAccount2)

      expect(bankAccount1.getBalance()).toBe(500)
      expect(bankAccount2.getBalance()).toBe(4000)
    })

    test("shouldn't transfer value in account", () => {
      const person1 = new Person('User test', '067.456.456-45', 45)
      const person2 = new Person('User test 2', '069.457.416-40', 45)

      const bankAccount1 = new BankAccount(person1, 1000, '45657-4')
      const bankAccount2 = new BankAccount(person2, 3500, '45657-4')

      expect(() => bankAccount1.transfer(1500, bankAccount2)).toThrow(
        BankAccountTransitionError
      )
    })
  })
})
