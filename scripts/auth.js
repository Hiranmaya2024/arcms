// auth.js: Handles authentication and session management

// Mock user data for demonstration
const users = [
  { username: 'customer', password: '123', role: 'customer' },
  { username: 'staff', password: '123', role: 'staff' }
];

// Function to authenticate user
function authenticate(username, password) {
  const user = users.find(
    user => user.username === username && user.password === password
  );
  if (user) {
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
}

// Example: Protecting pages
if (document.body.dataset.role) {
  enforceRole(document.body.dataset.role);
}
