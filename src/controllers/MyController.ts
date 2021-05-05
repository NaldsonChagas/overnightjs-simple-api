import { Get } from "@overnightjs/core"
import { Request , Response } from "express"

export class MyController {

  @Get('/')
  public index(req: Request, res: Response): void {
    res.send('Hello world')
  }
}