// Hashing function for simplicity, not secure for real use
function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to 32bit integer
    }
    return hash.toString();
}

// Register new user
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('regEmail').value;
    const password = hashPassword(document.getElementById('regPassword').value);

    // Save user data to local storage
    localStorage.setItem(email, password);
    alert('Registration successful!');
});

// Login user
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = hashPassword(document.getElementById('loginPassword').value);

    // Retrieve user data from local storage
    const storedPassword = localStorage.getItem(email);
    if (storedPassword === password) {
        alert('Login successful!');
    } else {
        alert('Invalid email or password.');
    }
});
