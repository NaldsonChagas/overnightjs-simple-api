
import { Server } from '@overnightjs/core'
import express, { Application } from 'express'
import './util/module-alias'
import {BankAccountController} from "@src/controllers/BankAccountController"
import {PersonController} from "@src/controllers/PersonController"

export class SetupServer extends Server {

  constructor(private readonly port = 3000) {
    super()
  }

  public init(): void {
    this.setupExpress()
    this.setupController()
    this.start()
  }

  public start(): void {
    if (process.env.NODE_ENV !== 'test') {
      this.app.listen(this.port, () => {
        console.log(`running on port ${this.port}`)
      })
    }
  }

  private setupExpress(): void {
    this.app.use(express.json())
  }

  private setupController() : void {
    this.addControllers([
      new BankAccountController(),
      new PersonController()
    ])
  }

  public getApp(): Application {
    return this.app
  }
}
