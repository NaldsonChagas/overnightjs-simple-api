import { SetupServer } from './server'

const server = new SetupServer()

;(async () => {
  await server.init()
})()
