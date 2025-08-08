document.addEventListener('DOMContentLoaded', function () {
  // ✅ Select the form with id="registration-form"
  const form = document.getElementById('registration-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting normally

    let name = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let feedback = document.getElementById('form-feedback');

    let errors = [];

    // Username must be at least 3 characters
    if (name.length < 3) {
      errors.push('Username must be at least 3 characters.');
    }

    // Simple email pattern check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email)) {
      errors.push('Please enter a valid email.');
    }

    // Password must be at least 6 characters
    if (password.length < 6) {
      errors.push('Password must be at least 6 characters.');
    }

    // Show feedback
    if (errors.length > 0) {
      feedback.style.display = "block";
      feedback.style.backgroundColor = "#ffbaba";
      feedback.style.color = "#d8000c";
      feedback.innerHTML = errors.join('<br>');
    } else {
      feedback.style.display = "block";
      feedback.style.backgroundColor = "#d4edda";
      feedback.style.color = "#155724";
      feedback.innerHTML = 'Registration successful!';
      // Optionally reset the form
      // form.reset();
    }
  });
});


