CREATE SCHEMA IF NOT EXISTS `userdatabase`;
CREATE TABLE IF NOT EXISTS `userdatabase`.`users`
(
    `name`             VARCHAR(24)   NOT NULL,
    `email`            VARCHAR(24)   NOT NULL
    );
CREATE TABLE 'userdatabase'.'preferences'(
    'uid' VARCHAR(5) PRIMARY KEY, /* foreign key(uid) references users(uid)*/
    'length_workout' INT NOT NULL,
    'time_workout' VARCHAR(10) NOT NULL
);
