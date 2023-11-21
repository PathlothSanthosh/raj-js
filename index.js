<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <style>
        /* Your styles here */
    </style>
</head>
<body>

    <form id="registrationForm" action="#" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>

        <button type="button" onclick="validateForm()">Register</button>
    </form>

    <script>
        function validateForm() {
            var username = document.getElementById('username').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            // Simple validation: check if fields are not empty
            if (username === "" || email === "" || password === "") {
                alert("Please fill in all fields");
            } else {
                // If validation passes, you can submit the form or perform other actions
                alert("Registration successful!");
                document.getElementById('registrationForm').submit(); // Uncomment to submit the form
            }
        }
    </script>

</body>
</html>
