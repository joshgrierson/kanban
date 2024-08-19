/*
  Warnings:

  - A unique constraint covering the columns `[boardId]` on the table `Status` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[boardId]` on the table `Task` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `boardId` to the `Status` table without a default value. This is not possible if the table is not empty.
  - Added the required column `boardId` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Status" ADD COLUMN     "boardId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "boardId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Status_boardId_key" ON "Status"("boardId");

-- CreateIndex
CREATE UNIQUE INDEX "Task_boardId_key" ON "Task"("boardId");

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Status" ADD CONSTRAINT "Status_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
