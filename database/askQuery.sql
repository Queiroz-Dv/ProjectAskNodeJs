CREATE TABLE
IF NOT EXISTS `asks`
(`id` INTEGER NOT NULL auto_increment , `title` VARCHAR
(255) NOT NULL, `description` TEXT NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY
(`id`)) ENGINE=InnoDB;