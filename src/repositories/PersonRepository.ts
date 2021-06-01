import { Person } from '@src/entities/Person'
import { getManager } from 'typeorm'

export class PersonRepository {
  private entityManager = getManager()

  public async create(person: Person): Promise<Person> {
    return await this.entityManager.save(Person, person)
  }

  public async findById(id: number): Promise<Person> {
    const person = await this.entityManager.findOne(Person, id)
    if (!person) throw new Error(`Can't find a person with id ${id}`)
    return person
  }

  public async findByCpf(cpf: string): Promise<Person> {
    const person = await this.entityManager.findOne(Person, { cpf })
    if (!person) throw new Error(`Can't find a person with cpf ${cpf}`)
    return person
  }
}
