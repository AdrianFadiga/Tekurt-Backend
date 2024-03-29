/*
  Warnings:

  - You are about to drop the column `hash` on the `users` table. All the data in the column will be lost.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `posts` MODIFY `mediaUrl` VARCHAR(500) NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `hash`,
    ADD COLUMN `password` VARCHAR(200) NOT NULL,
    MODIFY `image_url` VARCHAR(500) NULL,
    MODIFY `biography` VARCHAR(300) NULL;
