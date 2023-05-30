import { FastifyInstance } from 'fastify'
import { register } from './controllers/user-register'
import { createTransaction } from './controllers/create-transaction'
import { authenticate } from './controllers/authenticate'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)
  app.post('/transactions', createTransaction)
}
