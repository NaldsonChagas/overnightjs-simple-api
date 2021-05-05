
import { Server } from '@overnightjs/core'
import express, { Application } from 'express'
import './util/module-alias'
import { HomeController } from "@src/controllers/HomeController";

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
    this.app.listen(this.port, () => {
      console.log(`running on port ${this.port}`)
    })
  }

  private setupExpress(): void {
    this.app.use(express.json())
  }

  private setupController() : void {
    const homeController = new HomeController()
    this.addControllers([homeController])
  }

  public getApp(): Application {
    return this.app
  }
}
