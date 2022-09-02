/*
  Warnings:

  - You are about to drop the `Friend` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Friend` DROP FOREIGN KEY `Friend_friendId_fkey`;

-- DropForeignKey
ALTER TABLE `Friend` DROP FOREIGN KEY `Friend_userId_fkey`;

-- DropTable
DROP TABLE `Friend`;

-- CreateTable
CREATE TABLE `friends` (
    `userId` VARCHAR(191) NOT NULL,
    `friendId` VARCHAR(191) NOT NULL,
    `status` VARCHAR(200) NOT NULL DEFAULT 'pending',

    PRIMARY KEY (`userId`, `friendId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `friends` ADD CONSTRAINT `friends_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `friends` ADD CONSTRAINT `friends_friendId_fkey` FOREIGN KEY (`friendId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
