import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { GetUserProfileUseCase } from '../get-user-profile'

export function makeGetUserProfile() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const createTransactionsUseCase = new GetUserProfileUseCase(
    prismaUsersRepository,
  )

  return createTransactionsUseCase
}
