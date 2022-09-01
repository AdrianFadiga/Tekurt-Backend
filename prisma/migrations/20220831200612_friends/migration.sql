/*
  Warnings:

  - You are about to drop the column `statusId` on the `Friend` table. All the data in the column will be lost.
  - Added the required column `status` to the `Friend` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Friend` DROP COLUMN `statusId`,
    ADD COLUMN `status` BOOLEAN NOT NULL;
