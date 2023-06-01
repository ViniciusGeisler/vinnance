import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeCreateTransaction } from '@/use-cases/factories/make-create-transaction'

export async function createTransaction(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const transactionBodySchema = z.object({
    title: z.string(),
    is_fixed: z.boolean().default(false),
    amount_of_installments: z.number().default(0),
    value: z.number().nonnegative(),
    type: z.enum(['income', 'expense']).default('expense'),
  })

  const { title, is_fixed, amount_of_installments, value, type } =
    transactionBodySchema.parse(request.body)

  const createTransactionUseCase = makeCreateTransaction()

  const transaction = await createTransactionUseCase.execute({
    title,
    is_fixed,
    amount_of_installments,
    value,
    type,
    userId: request.user.sub,
  })

  return reply.status(201).send({ transaction })
}
