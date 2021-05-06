import {Connection} from "typeorm"
import {Person} from "@src/entities/Person"

export async function userUpsert(connection: Connection): Promise<void> {
  await connection
    .createQueryBuilder()
    .insert()
    .into(Person)
    .values(new Person('Wellington', '456.456.456-78', 38))
    .onConflict('("cpf") DO NOTHING')
    .execute()
}
