import { FastifyInstance } from 'fastify'
import { register } from './controllers/user-register'
import { createTransaction } from './controllers/create-transaction'
import { authenticate } from './controllers/authenticate'
import { getUserProfile } from './controllers/get-user-profile'
import { verifyJWT } from './middlewares/verify-jwt'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)
  app.get('/me', { onRequest: [verifyJWT] }, getUserProfile)
  app.post('/transactions', createTransaction)
}
