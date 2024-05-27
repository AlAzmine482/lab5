<?php 
//header("Refresh: 6; Location: login.php");
session_start();
ob_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $seconds = 10;
    $start_time = time();

    // Calculate the end time
    $end_time = $start_time + $seconds;
    $email = $_POST['inputemail'];
    $pass = $_POST['pass'];
    $repass = $_POST['re-password'];
    if (!preg_match("/^[^\s@]+@[^\s@]+\.[^\s@]+$/", $email)) {
        $error = "Please enter a valid email address";
    }
    if($pass !== $repass) {
        $error = "Passwords do not match";
    }
    if (!preg_match('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/', $pass)) {
        $error = "Password does not meet requirements";
    }
    
    $conn = mysqli_connect("db", "lamp_demo", "password", "lamp_demo");
    echo "Connection to SQL is successful";

    $query = "SELECT * FROM users WHERE email='$email'";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) > 0) {
        $_SESSION['message'] = "This email is already registered.";
        echo "This email is already registered.";
        //header("Refresh: 10; url=login.php");
        //echo "You will be redirected to the login page in 10 seconds.";
        //echo "<script>setTimeout(function(){ window.location.href = 'index.html'; }, 9000);</script>";
        header("Location: index.html");
        //header("Refresh: 10; Location: login.php");
    
        ob_end_flush();
        die();
    } else {
        $query = "INSERT INTO users (email, password) VALUES ('$email', '$pass')";
        mysqli_query($conn, $query);
        mysqli_close($conn);
       // ob_end_flush();
        $_SESSION['message'] = "You have successfully registered. Please log in.";
        echo "You have successfully registered. Please log in.";
       // header("Refresh: 10; url=login.php");
       //echo "You will be redirected to the login page in 10 seconds.";
       //echo "<script>setTimeout(function(){ window.location.href = 'login.html'; }, 9000);</script>";
        header("Location: index.php");
        //header("Refresh: 10; Location: login.php");
       // header("Location: login.php");
        die();
    }
    
    
  
}
?> 


