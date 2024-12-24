// auth.js: Handles authentication and session management
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (!loginForm) {
        console.error('Login form not found');
        return;
    }
 /*  loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();*/

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

// Function to authenticate user
function authenticate(username, password) {
 /* const user = users.find(
    user => user.username === username && user.password === password*/
    const user = credentials.find(row => row[0] === username && row[1] === password);

  
         if (user) {
                // Store user info in sessionStorage
                sessionStorage.setItem('isAuthenticated', 'true');
                sessionStorage.setItem('userType', user[2]);
                sessionStorage.setItem('username', username);

                // Redirect based on user type
                if (user[2] === 'staff') 
                {
                    window.location.href = 'staff.html';
                } else if (user[2] === 'customer') 
                {
                    window.location.href = 'customer.html';
                } else 
                {
                    errorMessage.textContent = 'Unauthorized Access';
                }
            } else 
             {
                errorMessage.textContent = 'Invalid username or password';
            }
        } /*catch (error) {
            errorMessage.textContent = 'An error occurred. Please try again.';
            console.error('Authentication error:', error);
        }*/
    });

// Example: Protecting pages
if (document.body.dataset.role) {
  enforceRole(document.body.dataset.role);
}
