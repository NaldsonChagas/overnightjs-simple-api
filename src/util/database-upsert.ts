import {Person} from "@src/entities/Person"
import {PersonRepository} from "@src/repositories/PersonRepository";

export async function mainPersonUpsert(): Promise<void> {
  const personRepository = new PersonRepository()

  const hasMainPerson = !!(await personRepository.findByCpf('456.456.456-78'))

  if (!hasMainPerson) {
    const person = new Person('Wellington', '456.456.456-78', 38)
    await personRepository.create(person)
  }

  // await getConnection()
  //   .createQueryBuilder()
  //   .insert()
  //   .into(Person)
  //   .values()
  //   .onConflict('("cpf") DO NOTHING')
  //   .execute()
}
