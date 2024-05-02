
// Get reference to the register button
const registerButton = document.getElementById('register-btn');

// Add click event listener
registerButton.addEventListener('click', () => {
    // Redirect to the login page
    window.location.href = 'login.html';
});


// invoke url : https://u3m02kjpll.execute-api.us-east-1.amazonaws.com/prod loginlambda::handleRequest