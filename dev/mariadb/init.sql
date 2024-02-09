CREATE DATABASE IF NOT EXISTS discordbot;
GRANT ALL PRIVILEGES on discordbot.* TO 'discordbot'@'%' IDENTIFIED BY 'qwert' WITH GRANT OPTION;

USE discordbot;

CREATE TABLE IF NOT EXISTS `commands` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `author` varchar(255) NOT NULL,
  `enabled` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `commands`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `commands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

 
INSERT INTO `commands` (`id`, `name`, `description`, `author`, `enabled`, `createdAt`, `updatedAt`) VALUES 
	(NULL, 'ping', 'Replies with Pong!', 'sfrank@wyl-online.de', '0', '2024-02-09 14:14:32.000000', '2024-02-09 14:14:32.000000'), 
	(NULL, 'user', 'Provides information about the user.', 'sfrank@wyl-online.de', '1', '2024-02-09 14:14:32.000000', '2024-02-09 14:14:32.000000'), 
	(NULL, 'delete-content', 'Delete Text Channel Content', 'sfrank@wyl-online.de', '0', '2024-02-09 14:14:32.000000', '2024-02-09 14:14:32.000000'); 