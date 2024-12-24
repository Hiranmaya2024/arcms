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
     /*   const errorMessage = document.getElementById('errorMessage');

        errorMessage.textContent = '';*/

   /*     try {
            if (typeof window.getLoginCredentials !== 'function') {
                throw new Error('API functions not loaded properly');
            }

            const credentials = await window.getLoginCredentials();
            if (!Array.isArray(credentials)) {
                throw new Error('Invalid credentials data received');
            }*/

            /*const user = credentials.find(row => row[0] === username && row[1] === password);*/

            if (user) {
                // Store user info in sessionStorage
                sessionStorage.setItem('isAuthenticated', 'true');
                sessionStorage.setItem('userType', user[2]);
                sessionStorage.setItem('username', username);

                // Redirect based on user type
                if (user[2] === 'staff') {
                    window.location.href = 'pages/staff.html';
                } else if (user[2] === 'customer') {
                    window.location.href = 'pages/customer.html';
                } else {
                    errorMessage.textContent = 'Unauthorized Access';
                }
            } else {
                errorMessage.textContent = 'Invalid username or password';
            }
        } catch (error) {
            errorMessage.textContent = 'An error occurred. Please try again.';
            console.error('Authentication error:', error);
        }
    });
});*/
// Mock user data for demonstration
/*const users = [
  { username: 'customer', password: '123', role: 'customer' },
  { username: 'staff', password: '123', role: 'staff' }
];*/

// Function to authenticate user
function authenticate(username, password) {
 /* const user = users.find(
    user => user.username === username && user.password === password*/
    const user = credentials.find(row => row[0] === username && row[1] === password);

  );
/*  if (user) {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    return user.role;
  } else {
    return null;
  }
}

// Function to check if the user is authenticated
function isAuthenticated() {
  const user = sessionStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
}

// Function to logout the user
function logout() {
  sessionStorage.removeItem('currentUser');
  window.location.href = 'login.html';
}

// Function to enforce role-based access
function enforceRole(requiredRole) {
  const user = isAuthenticated();
  if (!user || user.role !== requiredRole) {
    alert('Unauthorized access!');
    logout();
  }
}

// Event listener for login form
if (document.getElementById('loginForm')) {
  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const role = authenticate(username, password);

    if (role === 'customer') {
      window.location.href = 'customer.html';
    } else if (role === 'staff') {
      window.location.href = 'staff.html';
    } else {
      alert('Invalid credentials!');
    }
  });
}*/
         if (user) {
                // Store user info in sessionStorage
                sessionStorage.setItem('isAuthenticated', 'true');
                sessionStorage.setItem('userType', user[2]);
                sessionStorage.setItem('username', username);

                // Redirect based on user type
                if (user[2] === 'staff') {
                    window.location.href = 'staff.html';
                } else if (user[2] === 'customer') {
                    window.location.href = 'customer.html';
                } else {
                    errorMessage.textContent = 'Unauthorized Access';
                }
            } else {
                errorMessage.textContent = 'Invalid username or password';
            }
        } catch (error) {
            errorMessage.textContent = 'An error occurred. Please try again.';
            console.error('Authentication error:', error);
        }
    });
});

// Example: Protecting pages
if (document.body.dataset.role) {
  enforceRole(document.body.dataset.role);
}
