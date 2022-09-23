-- AlterTable
ALTER TABLE `users` MODIFY `image_url` VARCHAR(500) NULL DEFAULT 'https://i.imgur.com/UOIIow6.jpg',
    MODIFY `biography` VARCHAR(300) NULL DEFAULT 'Não informado';
