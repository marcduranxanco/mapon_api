<?php
// DB CONNECTION:

define('DB_SERVER', 'mysql');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'password');
define('DB_NAME', 'mapon_sql');

// Try to connect DB
try {
    $mysqli = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
} catch (Exception $e) {
    die("ERROR: Could not connect. " . $mysqli->connect_error . " " . $e->getMessage());
}
?>