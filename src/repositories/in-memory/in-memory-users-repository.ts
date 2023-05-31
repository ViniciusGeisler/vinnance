import { User, Prisma } from '@prisma/client'
import { UsersRepository } from '../users-repository'
import { randomUUID } from 'crypto'

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = []

  async findById(userId: string): Promise<User | null> {
    const user = this.items.find((user) => user.id === userId)

    if (!user) {
      return null
    }

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.items.find((user) => user.email === email)

    if (!user) {
      return null
    }

    return user
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user = {
      id: data.id ?? randomUUID(),
      name: data.name,
      email: data.email,
      password: data.password,
      created_at: new Date(),
    }

    this.items.push(user)

    return user
  }
}
