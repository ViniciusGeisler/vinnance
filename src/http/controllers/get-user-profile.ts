import { FastifyRequest, FastifyReply } from 'fastify'
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { makeGetUserProfile } from '@/use-cases/factories/make-get-user-profile'

export async function getUserProfile(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const getUserProfileUseCase = makeGetUserProfile()

    const { user } = await getUserProfileUseCase.execute({
      userId: request.user.sub,
    })

    return reply.status(201).send({
      user: {
        ...user,
        password: undefined,
      },
    })
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.status(404).send({ message: error.message })
    }

    throw error
  }
}
