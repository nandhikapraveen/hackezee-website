

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve user input from the form
    $username = $_POST["username"];
    $password = $_POST["password"];
    $email = $_POST["email"];

    // TODO: Add validation and security checks

    // Establish a database connection using MySQLi
    $conn = mysqli_connect('localhost', 'root', '', 'supermarket');

    // Check the connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Insert user data into the "customer_info" table
    $sql = "INSERT INTO customer_info (username, password, email) VALUES (?, ?, ?)";
    
    $stmt = mysqli_prepare($conn, $sql);

    // Bind parameters and execute the statement
    mysqli_stmt_bind_param($stmt, 'sss', $username, $password, $email);

    if (mysqli_stmt_execute($stmt)) {
        echo "Registration successful!";
    } else {
        echo "Error: " . mysqli_error($conn);
    }

    // Close the statement and database connection
    mysqli_stmt_close($stmt);
    mysqli_close($conn);
}
?>
