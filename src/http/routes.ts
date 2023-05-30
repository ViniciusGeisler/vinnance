import { FastifyInstance } from 'fastify'
import { register } from './controllers/user-register'
import { createTransaction } from './controllers/create-transaction'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/transactions', createTransaction)
}
