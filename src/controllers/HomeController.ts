import {Controller, Get} from "@overnightjs/core"
import { Request , Response } from "express"

@Controller('/')
export class HomeController {

  @Get('/')
  public index(req: Request, res: Response): void {
    res.send('Hello world')
  }
}
