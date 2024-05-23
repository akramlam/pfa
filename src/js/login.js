// login.js

// Get reference to the register button
const registerButton = document.getElementById('login-btn');

// // Add click event listener
registerButton.addEventListener('click', () => {
//     // Redirect to the register page
    window.location.href = '../auth/register.html';
});


document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();  // Prevent the default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        // alert('username' + username);

        const response = await fetch('https://u3m02kjpll.execute-api.us-east-1.amazonaws.com/prod/login', {
            method: 'POST',
            headers: {
                'authorization':'n87Es_BvhTZxrrqkJdne2efJArYhwJIBQD_nHO1HlS-k7RfuvZ242jfzfcS3-chRWmEyBHWj6LpAV0TKJwx--gXzYN73tECbsZn-YrjF7RItXTP16AyA9J0ntuQW-rua8BxC0y1nyCvc5arV8COXa9VHDOO_ZmOdJwo5FDpbrD7f8cTEycWFB2RfOD19OvqytBrX6KMhQ_vDYoB1t2lnbvxbtdb9XJe_NTO7JKhafFCUdCi49KNadRx4cFgJVdeYDc2zdm4EKm3zBLVWEpLNgGFtmDGL_veMn9bxLC2w1-Co4iHtNj_NeXzgYvrzjU6dxwuept54fJa0uDCqK2EcHw',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (data.success) {
            window.location.href = 'dashboard.html'; // Redirect to dashboard
        } else {
            alert('Login failed: ' + data.message); // Display an error message
        }
    });
});
