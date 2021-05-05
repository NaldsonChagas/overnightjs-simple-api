import {Repository} from "@src/repositories/Repository"
import {Person} from "@src/models/Person";

export class PersonRepository extends Repository {

  public findById(id: number): Person {
    const person = this.items.find(person => person.getId() === id)
    if (!person) throw new Error("This person doesn't exists")
    return person as Person
  }
}
