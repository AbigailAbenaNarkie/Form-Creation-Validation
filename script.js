document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from submitting normally

  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let password = document.getElementById('password').value.trim();
  let errorMessages = document.getElementById('errorMessages');

  let errors = [];

  if (name.length < 3) {
    errors.push('Name must be at least 3 characters.');
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    errors.push('Please enter a valid email.');
  }

  if (password.length < 6) {
    errors.push('Password must be at least 6 characters.');
  }

  if (errors.length > 0) {
    errorMessages.innerHTML = errors.join('<br>');
  } else {
    errorMessages.innerHTML = '';
    alert('Form submitted successfully!');
    // You can now submit to a server or reset the form
  }
});

