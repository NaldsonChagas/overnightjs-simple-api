
import { Server } from '@overnightjs/core'
import express, {Application} from 'express'
import './util/module-alias.ts'
import { MyController } from './controllers/MyController'

export class SetupServer extends Server {

  constructor(private port = 3000) {
    super()
  }

  public init(): void {
    this.setupExpress()
    this.setupController()
  }

  private setupExpress(): void {
    this.app.use(express.json())
  }

  private setupController() : void {
    const myController = new MyController()
    this.addControllers([myController])
  }

  public getApp(): Application {
    return this.app
  }
}
