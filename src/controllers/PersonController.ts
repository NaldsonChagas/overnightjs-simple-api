import {Controller, Post} from "@overnightjs/core"
import {Request, Response} from "express"
import {Person} from "@src/models/Person"
import {PersonRepository} from "@src/repositories/PersonRepository";

@Controller('person')
export class PersonController {

  @Post('/')
  public create(req: Request, res: Response): void {
    const {name, age, cpf} = req.body

    try {
      const person = new Person(name, cpf, age)

      const personRepository = new PersonRepository()
      const createdPerson = personRepository.create(person)

      res.send({
        message: 'Success',
        person: createdPerson
      })
    } catch (error) {
      console.log(error)
      res.status(500).send("Can't save this. Internal server error")
    }
  }
}
