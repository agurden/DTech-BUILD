CREATE SCHEMA IF NOT EXISTS `userdatabase`;
CREATE TABLE IF NOT EXISTS `userdatabase`.`users`
(
    `name`             VARCHAR(24)   NOT NULL,
    `email` VARCHAR(24) NOT NULL
);