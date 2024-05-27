<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = $_POST['email'];
        $password = $_POST['password'];
        //$repass = $_POST['re-password'];
         if (!preg_match("/^[^\s@]+@[^\s@]+\.[^\s@]+$/", $email)) {
                //$error = "Please enter a valid email address";
                echo "Invalid email";
                header("Refresh: 10; Location: register.html");
                exit;

         }
      // Check if form was submitted via POST
        //echo "works";
    // Connect to database
        $host = 'db';
        $user = 'lamp_demo';
        $password_db = 'password';
        $db_name = 'lamp_demo';
        $connection = mysqli_connect($host, $user, $password_db, $db_name);
        if (!$connection) {
          echo "connection failed";
          die("Connection failed: " . mysqli_connect_error());
         }
    

        // Query database for user
        $query = "SELECT * FROM users WHERE email=?";
        $stmt = mysqli_prepare($connection, $query);
        mysqli_stmt_bind_param($stmt, "s", $email);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        //$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // query database for user
        //$stmt = $conn->prepare("SELECT * FROM users WHERE email=:email");
        //$stmt->bindParam(':email', $email);
        //$stmt->execute();
        // Check if user exists
        if (mysqli_num_rows($result) == 0) {
          echo "User does not exist";
          header("Refresh: 10; Location: register.html");
          exit;
        }

        // Check if password matches
        $row = mysqli_fetch_assoc($result);
        if ($row['password'] !== $password) {
            echo "Incorrect password";
            //print_r($row['password']); works aricelord 
            header("Refresh: 10; Location: register.html");
           //header("Refresh: 10; Location: register.html");
           exit;
        }

    // Redirect to form.html
    //header("Refresh = 10; Location: form.html");
    header("Location: form.html");
    exit;
    }
    
?>