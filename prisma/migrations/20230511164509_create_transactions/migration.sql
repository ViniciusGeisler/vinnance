-- CreateEnum
CREATE TYPE "TypeTransaction" AS ENUM ('Receita', 'Despesa');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "isFixed" BOOLEAN NOT NULL DEFAULT false,
    "amountOfInstallments" INTEGER NOT NULL DEFAULT 0,
    "value" DECIMAL(65,30) NOT NULL,
    "type" "TypeTransaction" NOT NULL DEFAULT 'Despesa',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);
