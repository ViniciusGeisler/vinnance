import { prisma } from '@/lib/prisma'
import { Prisma, Transaction } from '@prisma/client'
import { TransactionsRepository } from '../transactions-repository'

export class PrismaTransactionsRepository implements TransactionsRepository {
  async create(
    data: Prisma.TransactionUncheckedCreateInput,
  ): Promise<Transaction> {
    const transaction = await prisma.transaction.create({
      data,
    })

    return transaction
  }
}
