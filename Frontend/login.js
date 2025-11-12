
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignupBtn = document.getElementById('show-signup');
    const showLoginBtn = document.getElementById('show-login');

    // Logic for the Customer/Vendor role buttons
    const roleButtons = document.querySelectorAll('.role-btn');
    const roleInput = document.getElementById('signup-role');
    roleButtons.forEach(button => {
        button.addEventListener('click', () => {
            roleButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            roleInput.value = button.dataset.role;
        });
    });

    // Logic to switch between Login and Signup forms
    showSignupBtn.addEventListener('click', (e) => { e.preventDefault(); loginForm.classList.add('hidden'); signupForm.classList.remove('hidden'); });
    showLoginBtn.addEventListener('click', (e) => { e.preventDefault(); signupForm.classList.add('hidden'); loginForm.classList.remove('hidden'); });

    // Logic for Signup Form Submission
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const role = roleInput.value;
        try {
            const res = await fetch('http://localhost:3001/api/users/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password, role })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.msg || 'Something went wrong');
            alert('Signup successful! Please log in.');
            signupForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
        } catch (err) {
            alert('Error: ' + err.message);
        }
    });


    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        try {
            const res = await fetch('http://localhost:3001/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.msg || 'Something went wrong');
            
            if (data.token) {
                localStorage.setItem('userToken', data.token);
                alert('Login successful!');
                
                // We must parse the token to get the user's role
                const user = parseJwt(data.token).user;
                
                if (user.role === 'vendor') {
                    window.location.href = 'dashboard.html';
                } else {
                    window.location.href = 'shop.html';
                }
            }
        } catch (err) {
            alert('Error: ' + err.message);
        }
    });

    function parseJwt(token) {
        try { return JSON.parse(atob(token.split('.')[1])); } catch (e) { return null; }
    }
});