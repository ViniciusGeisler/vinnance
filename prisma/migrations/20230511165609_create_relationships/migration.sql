/*
  Warnings:

  - You are about to drop the column `amountOfInstallments` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `isFixed` on the `transactions` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "amountOfInstallments",
DROP COLUMN "isFixed",
ADD COLUMN     "amount_of_installments" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "is_fixed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
