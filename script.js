document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Stop normal form submit
        validateForm();
    });

    function validateForm() {
        let messages = [];

        // Username: at least 3 characters
        if (username.value.trim().length < 3) {
            messages.push("Username must be at least 3 characters long.");
        }

        // Email: simple check using @ symbol
        if (!email.value.includes("@") || !email.value.includes(".")) {
            messages.push("Please enter a valid email address.");
        }

        // Password: at least 6 characters
        if (password.value.trim().length < 6) {
            messages.push("Password must be at least 6 characters long.");
        }

        // Show feedback
        if (messages.length > 0) {
            feedback.style.display = "block";
            feedback.style.backgroundColor = "#ffbaba"; // red background
            feedback.style.color = "#d8000c"; // red text
            feedback.innerHTML = messages.join("<br>");
        } else {
            feedback.style.display = "block";
            feedback.style.backgroundColor = "#d4edda"; // green background
            feedback.style.color = "#155724"; // green text
            feedback.innerHTML = "Registration successful!";
        }
    }
});
;

