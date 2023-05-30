import { beforeEach, describe, expect, it } from 'vitest'
import { CreateTransactionsUseCase } from './create-transactions'
import { InMemoryTransactionsRepository } from '@/repositories/in-memory/in-memory-transactions-repository'

let transactionsRepository: InMemoryTransactionsRepository
let sut: CreateTransactionsUseCase

beforeEach(() => {
  transactionsRepository = new InMemoryTransactionsRepository()
  sut = new CreateTransactionsUseCase(transactionsRepository)
})

describe('Create transactions Use Case', () => {
  it('should be able to create a new transaction', async () => {
    const { transaction } = await sut.execute({
      userId: 'user-01',
      amount_of_installments: 0,
      is_fixed: false,
      title: 'IFood',
      type: 'expense',
      value: 300,
    })

    expect(transaction.id).toEqual(expect.any(String))
  })

  it('should be able to create a new transaction with type expense', async () => {
    const { transaction } = await sut.execute({
      userId: 'user-01',
      amount_of_installments: 0,
      is_fixed: false,
      title: 'IFood',
      type: 'expense',
      value: 300,
    })

    expect(transaction.id).toEqual(expect.any(String))
    expect(transaction.type).toEqual('expense')
  })

  it('should be able to create a new transaction with type income', async () => {
    const { transaction } = await sut.execute({
      userId: 'user-01',
      amount_of_installments: 0,
      is_fixed: false,
      title: 'IFood',
      type: 'income',
      value: 300,
    })

    expect(transaction.id).toEqual(expect.any(String))
    expect(transaction.type).toEqual('income')
  })
})
