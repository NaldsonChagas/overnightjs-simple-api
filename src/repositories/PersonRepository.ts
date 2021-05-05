import {Repository} from "@src/repositories/Repository"
import {Person} from "@src/models/Person";

export class PersonRepository extends Repository {

  constructor() {
    super()

    if (this.items.length < 1) {
      this.createMainPerson()
    }
  }

  public createMainPerson(): Person {
    const mainPerson = new Person('Wellington', '456.456.456-45', 38)
    return this.create(mainPerson) as Person
  }

  public findById(id: number): Person {
    const person = this.items.find(person => person.getId() === id)
    if (!person) throw new Error("This person doesn't exists")
    return person as Person
  }
}
