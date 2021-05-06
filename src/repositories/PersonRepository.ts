import {Person} from "@src/entities/Person"
import {getManager, getRepository} from "typeorm"

export class PersonRepository {

  private entityManager = getManager()

  public async create(person: Person): Promise<Person> {
    const createdPerson = await this.entityManager.save(Person, person)
    return createdPerson
  }

  public async findById(id: number): Promise<Person> {
    const person = await this.entityManager.findOne(Person, id)
    if (!person) throw new Error(`Can't find a person with id ${id}`)
    return person
  }
}
