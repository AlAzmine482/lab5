<?php
$host = 'db';
$user = 'lamp_demo';
$password_db = 'password';
$db_name = 'lamp_demo';


$connection = mysqli_connect($host, $user, $password_db, $db_name);
if (!$connection) {
die("Connection failed: " . mysqli_connect_error());
}
$name = $_POST['name'];
$major = $_POST['major'];
$id = $_POST['csunid'];
$title = $_POST['title'];
$content = $_POST['content'];



$sql = "INSERT INTO about_me (name, major, id, title, content) VALUES ('$name', '$major', '$id', '$title', '$content')";

if (mysqli_query($connection, $sql)) {
echo "New record created successfully";
} else {
echo "Error: " . $sql . "<br>" . mysqli_error($connection);
}

mysqli_close($connection);
?>
