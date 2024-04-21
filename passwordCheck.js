// Get the form element by its ID
const form = document.getElementById('loginForm');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the input value (password)
    const passwordInput = document.querySelector('input[name="password"]');
    const password = passwordInput.value;

    // Check if the password is equal to "17012008"
    if (password.trim() === '17012008') {
        // If password is correct, redirect to GameMenu.html
        window.location.href = 'GameMenu.html';
    } else {
        // If password is incorrect, display an alert
        alert('Incorrect password. Please try again.');
        // Clear the input field
        passwordInput.value = '';
    }
});
