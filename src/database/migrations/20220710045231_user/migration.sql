-- CreateTable
CREATE TABLE `signs` (
    `id` VARCHAR(191) NOT NULL,
    `sign` VARCHAR(15) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `social_status` (
    `id` VARCHAR(191) NOT NULL,
    `status` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `drinking` (
    `id` VARCHAR(191) NOT NULL,
    `option` VARCHAR(15) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(20) NOT NULL,
    `last_name` VARCHAR(30) NOT NULL,
    `username` VARCHAR(20) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(200) NOT NULL,
    `image_url` VARCHAR(255) NOT NULL,
    `social_status_id` VARCHAR(191) NOT NULL,
    `birth_date` DATETIME(3) NOT NULL,
    `children` BOOLEAN NOT NULL,
    `smokes` BOOLEAN NOT NULL,
    `drinking_id` VARCHAR(191) NOT NULL,
    `sign_id` VARCHAR(191) NOT NULL,
    `biography` VARCHAR(300) NOT NULL,
    `active` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_name` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_sign_id_fkey` FOREIGN KEY (`sign_id`) REFERENCES `signs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_social_status_id_fkey` FOREIGN KEY (`social_status_id`) REFERENCES `social_status`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_drinking_id_fkey` FOREIGN KEY (`drinking_id`) REFERENCES `drinking`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
