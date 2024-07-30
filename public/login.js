document.addEventListener('DOMContentLoaded', () => {
    const customerBtn = document.getElementById('customerBtn');
    const ownerBtn = document.getElementById('ownerBtn');
    const customerLoginBox = document.getElementById('customer-login');
    const ownerLoginBox = document.getElementById('owner-login');
    const customerLoginForm = document.getElementById('customerLoginForm');
    const ownerLoginForm = document.getElementById('ownerLoginForm');
    const ownerContent = document.getElementById('ownerContent');
    const viewPlansAndQueriesBtn = document.getElementById('viewPlansAndQueriesBtn');

    customerBtn.addEventListener('click', () => {
        customerLoginBox.classList.remove('hidden');
        ownerLoginBox.classList.add('hidden');
        customerLoginBox.classList.add('slide-in-left', 'show');
    });

    ownerBtn.addEventListener('click', () => {
        ownerLoginBox.classList.remove('hidden');
        customerLoginBox.classList.add('hidden');
        ownerLoginBox.classList.add('slide-in-right', 'show');
    });

    customerLoginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle customer login
        alert('Customer logged in');
        localStorage.setItem('customerLoggedIn', 'true');
        window.location.href = 'index.html';  // Adjust as needed
    });

    ownerLoginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('ownerEmail').value;
        const password = document.getElementById('ownerPassword').value;

        // Hardcoded owner credentials
        const ownerEmail = 'owner@example.com';
        const ownerPassword = 'password';

        if (email === ownerEmail && password === ownerPassword) {
            alert('Owner logged in');
            localStorage.setItem('ownerLoggedIn', 'true');
            ownerContent.classList.remove('hidden');
        } else {
            alert('Invalid owner credentials');
        }
    });

    viewPlansAndQueriesBtn.addEventListener('click', () => {
        window.location.href = 'plans.html';  // Adjust as needed
    });

    // Check if user is already logged in
    const customerLoggedIn = localStorage.getItem('customerLoggedIn') === 'true';
    const ownerLoggedIn = localStorage.getItem('ownerLoggedIn') === 'true';

    if (customerLoggedIn) {
        // Show logout button instead of login form for customers
        customerLoginBox.innerHTML = `
            <h2>Customer Logged In</h2>
            <button id="customerLogoutBtn">Logout</button>
        `;
        document.getElementById('customerLogoutBtn').addEventListener('click', () => {
            localStorage.removeItem('customerLoggedIn');
            alert('Logout successful');
            window.location.reload();
        });
    
    } else if (ownerLoggedIn) {
        ownerContent.classList.remove('hidden');
        ownerLoginForm.innerHTML = '<button id="ownerLogoutBtn">Logout</button>';
        document.getElementById('ownerLogoutBtn').addEventListener('click', () => {
            localStorage.removeItem('ownerLoggedIn');
            alert('Logout successful');
            window.location.href = 'login.html';  // Redirect to login page or reload to reset state
        });
    }
});
