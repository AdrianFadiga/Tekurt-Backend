/*
  Warnings:

  - You are about to drop the column `sign` on the `signs` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `social_status` table. All the data in the column will be lost.
  - Added the required column `option` to the `signs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `option` to the `social_status` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `signs` DROP COLUMN `sign`,
    ADD COLUMN `option` VARCHAR(20) NOT NULL;

-- AlterTable
ALTER TABLE `social_status` DROP COLUMN `status`,
    ADD COLUMN `option` VARCHAR(20) NOT NULL;
