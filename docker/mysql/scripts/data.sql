USE `mapon_sql`;
INSERT INTO `Users`
    (`id`, `username`, `password`, `created_at`, `updated_at`)
VALUES
    (NULL, 'administrator', '$2y$10$BU4YOBIJTflsw8pYPvSYVeJXPwtcbvX1w4cJ6/lDSDpO5.lDZner6', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);