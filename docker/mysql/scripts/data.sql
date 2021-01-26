USE `mapon_sql`;
INSERT INTO `Users`
    (`id`, `user_name`, `password`, `creation_date`, `update_date`)
VALUES
    (NULL, 'Administrator', 'administrator', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (NULL, 'user', 'password', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);