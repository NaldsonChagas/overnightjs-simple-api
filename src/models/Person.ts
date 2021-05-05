import {Model} from "@src/models/utils/Model"

export class Person extends Model {
  constructor(
    private name: string,
    private cpf: string,
    private age: number
  ) {
    super()
    this.validate([
      name, cpf, age
    ])
  }
}
