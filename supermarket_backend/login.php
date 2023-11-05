<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve user input from the form
    $username = $_POST["username"];
    $password = $_POST["password"];

    // TODO: Add validation and security checks

    // Create a database connection (You should provide your database credentials)
    $conn = mysqli_connect("localhost", "username", "password", "supermarket");

    // Check the connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Query the database to check if the user exists
    $sql = "SELECT * FROM customer_info WHERE username = '$username' AND password = '$password'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) == 1) {
        echo "Login successful!";
        // Redirect to the desired page after successful login
        header("Location: welcome.php");
    } else {
        echo "Username or password is incorrect.";
    }

    // Close the database connection
    mysqli_close($conn);
}
?>
