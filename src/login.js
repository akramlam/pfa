// login.js

// Get reference to the register button
const registerButton = document.getElementById('login-btn');

// Add click event listener
registerButton.addEventListener('click', () => {
    // Redirect to the register page
    window.location.href = 'register.html';
});
