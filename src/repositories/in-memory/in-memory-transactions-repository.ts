import { randomUUID } from 'crypto'
import { Prisma, Transaction } from '@prisma/client'
import { TransactionsRepository } from '../transactions-repository'

export class InMemoryTransactionsRepository implements TransactionsRepository {
  public items: Transaction[] = []

  async create(data: Prisma.TransactionUncheckedCreateInput) {
    const transaction = {
      id: randomUUID(),
      title: data.title,
      is_fixed: data.is_fixed ?? false,
      amount_of_installments: data.amount_of_installments ?? 0,
      value: new Prisma.Decimal(data.value.toString()),
      type: data.type ?? 'expense',
      user_id: data.user_id,
      created_at: new Date(),
    }

    this.items.push(transaction)

    return transaction
  }
}
