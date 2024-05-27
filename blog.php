<?php 
$host = 'db';
$user = 'lamp_demo';
$password_db = 'password';
$db_name = 'lamp_demo';
$connection = mysqli_connect($host,$user,$password_db,$db_name);
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}
  
  // Query the posts table to get all the posts
  $sql = "SELECT * FROM posts";
  $result = mysqli_query($connection, $sql);
  
  // Generate the table HTML
  echo "<table>";
  echo "<tr><th>ID</th><th>Email</th><th>Name</th><th>Student ID</th><th>Major</th><th>Taskname</th><th>Task Date</th><th>Post Text</th></tr>";
  
  while ($row = mysqli_fetch_assoc($result)) {
    echo "<tr>";
    echo "<td>" . $row["id"] . "</td>";
    echo "<td>" . $row["email"] . "</td>";
    echo "<td>" . $row["name"] . "</td>";
    echo "<td>" . $row["student_id"] . "</td>";
    echo "<td>" . $row["major"] . "</td>";
    echo "<td>" . $row["taskname"] . "</td>";
    echo "<td>" . $row["task_date"] . "</td>";
    echo "<td>" . $row["post_text"] . "</td>";
    echo "</tr>";
  }
  
  echo "</table>";
  
  // Close the database connection
  mysqli_close($connection);
  
  ?>