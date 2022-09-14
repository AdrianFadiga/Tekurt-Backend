-- DropIndex
DROP INDEX `users_first_name_last_name_username_idx` ON `users`;

-- CreateIndex
CREATE FULLTEXT INDEX `users_first_name_idx` ON `users`(`first_name`);
