import { Controller, Post } from '@overnightjs/core'
import { Request, Response } from 'express'
import { Person } from '@src/entities/Person'
import { PersonRepository } from '@src/repositories/PersonRepository'

@Controller('person')
export class PersonController {
  private personRepository = new PersonRepository()

  @Post('/')
  public async create(req: Request, res: Response): Promise<void> {
    const { name, age, cpf } = req.body

    try {
      const person = new Person(name, cpf, age)
      const createdPerson = await this.personRepository.create(person)

      res.send({
        message: 'Success',
        person: createdPerson,
      })
    } catch (error) {
      console.log(error)
      res.status(500).send("Can't save this. Internal server error")
    }
  }
}
