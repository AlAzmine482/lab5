<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
   $name = "Al Azmine";
   $student_id = "109945548";
   $major = "Computer Science";
   $task_date = $_POST['taskdate'];
   //$task_date = date('Y-m-d H:i:s', strtotime($_POST['taskdate']));
   $post_text = $_POST['Parapost'];
   $taskname = $_POST['taskname'];
   $email = "al.azmine@gmail.com";
   //echo "works1";

   $host = 'db';
   $user = 'lamp_demo';
   $password_db = 'password';
   $db_name = 'lamp_demo';
   $connection = mysqli_connect($host, $user, $password_db, $db_name);
   if (!$connection) {
    echo "connection failed";
    die("Connection failed: " . mysqli_connect_error());
   }
   //echo"v2";
   $emailquery = "SELECT * FROM users WHERE email=?";
   $emailstmt = mysqli_prepare($connection, $emailquery);
   mysqli_stmt_bind_param($emailstmt, "s", $_SESSION['email']);
   mysqli_stmt_execute($emailstmt);
   $emailresult = mysqli_stmt_get_result($emailstmt);
   $emailrow = mysqli_fetch_assoc($emailresult);
   //$email = $emailrow['email'];
   //echo"v3";

  // $query = "INSERT INTO posts (email, name, student_id, major, taskname, task_date, post_text) VALUES ('$email', '$name', $student_id, '$major', '$taskname', '$task_date', '$post_text')";
  // $stmt = mysqli_prepare($connection, $query);
   //mysqli_stmt_bind_param($stmt, "ssisssss", $email, $name, $student_id, $major, $taskname, $task_date, $post_text);
  // mysqli_stmt_bind_param($stmt, "ssissss", $email, $name, $student_id, $major, $taskname, $task_date, $post_text);
   //mysqli_stmt_execute($stmt);
   $query = "INSERT INTO posts (email, name, student_id, major, taskname, task_date, post_text) VALUES (?, ?, ?, ?, ?, ?, ?)";
   $stmt = mysqli_prepare($connection, $query);
   mysqli_stmt_bind_param($stmt, "ssissss", $email, $name, $student_id, $major, $taskname, $task_date, $post_text);
   mysqli_stmt_execute($stmt);

   //echo"b4header";
   header("Location: blog.php");
   //header("Location: index.html");
   exit;
}

    
?>