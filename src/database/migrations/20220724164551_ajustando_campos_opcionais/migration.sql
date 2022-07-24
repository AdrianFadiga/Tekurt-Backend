-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_drinking_id_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_sign_id_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_social_status_id_fkey`;

-- AlterTable
ALTER TABLE `users` MODIFY `social_status_id` VARCHAR(191) NULL,
    MODIFY `children` BOOLEAN NULL,
    MODIFY `smokes` BOOLEAN NULL,
    MODIFY `drinking_id` VARCHAR(191) NULL,
    MODIFY `sign_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_sign_id_fkey` FOREIGN KEY (`sign_id`) REFERENCES `signs`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_social_status_id_fkey` FOREIGN KEY (`social_status_id`) REFERENCES `social_status`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_drinking_id_fkey` FOREIGN KEY (`drinking_id`) REFERENCES `drinking`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
