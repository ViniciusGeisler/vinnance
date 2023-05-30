import { TransactionsRepository } from '@/repositories/transactions-repository'

interface TransactionUseCaseRequest {
  userId: string
  title: string
  is_fixed: boolean
  amount_of_installments: number
  value: number
  type: 'income' | 'expense'
}

export class CreateTransactionsUseCase {
  constructor(private transactionsRepository: TransactionsRepository) {}

  async execute({
    userId,
    title,
    is_fixed,
    amount_of_installments,
    value,
    type = 'expense',
  }: TransactionUseCaseRequest) {
    const transaction = await this.transactionsRepository.create({
      title,
      is_fixed,
      amount_of_installments,
      value,
      type,
      user_id: userId,
    })

    return {
      transaction,
    }
  }
}
