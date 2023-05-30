import { PrismaTransactionsRepository } from '@/repositories/prisma/prisma-transactions-repository'
import { CreateTransactionsUseCase } from '../create-transactions'

export function makeCreateTransaction() {
  const prismaTransactionsRepository = new PrismaTransactionsRepository()
  const createTransactionsUseCase = new CreateTransactionsUseCase(
    prismaTransactionsRepository,
  )

  return createTransactionsUseCase
}
