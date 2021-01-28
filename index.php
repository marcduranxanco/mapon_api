<?php
// Init session
session_start();

// Check user loggin or redirect
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: login.php");
    echo "You are not logged in";
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/style.css" />

    <!-- Scripts -->
    <script src="scripts/index.js"></script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAU4LetuoN7pA8v0DQ1hluyvOF6iWUpOlk&callback=initMap&libraries=&v=weekly" defer></script>
    <!-- Scripts -->
</head>
<body>
    <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-8">
                <h3>Hi, <b><?php echo htmlspecialchars($_SESSION["username"]); ?></b>. Welcome to your map route.</h3>
            </div>
            <div class="float-right">
                <a href="logout.php" class="btn btn-danger">Sign Out</a>
            </div>
        </div>
    </div>
    <div class="container h-100">
        <div id="map" class="col-md-12"></div>
    </div>
</body>
</html>