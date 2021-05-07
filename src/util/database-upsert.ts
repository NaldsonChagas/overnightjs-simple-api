import {getConnection} from "typeorm"
import {Person} from "@src/entities/Person"

export async function mainPersonUpsert(): Promise<void> {
  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Person)
    .values({name: 'Wellington', cpf: '456.456.456-78', age: 38})
    .onConflict('("cpf") DO NOTHING')
    .execute()
}
