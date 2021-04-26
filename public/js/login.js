//JS Variables
const loginForm = document.getElementById('login-form');

// DOM Variables


// Function Definitions
// function createNewUser(event) {
//     event.preventDefault();
//     alert("Signup button was clicked!")
// };
const loginUser = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (email && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }

};


// Event Listeners


loginForm.addEventListener('submit', loginUser)