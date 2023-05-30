import { AuthenticateUseCase } from '../authenticate'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'

export function makeAuthenticate() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const createTransactionsUseCase = new AuthenticateUseCase(
    prismaUsersRepository,
  )

  return createTransactionsUseCase
}
