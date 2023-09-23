const registerForm = document.getElementById('registerForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        alert('Password and Confirm Password do not match.');
    } else {
        alert(`Registered with Username: ${username}, Email: ${email}, Password: ${password}`);
    }
});

const postData = async (e) => {
    e.preventDefault();
    const response = await fetch('URL_SERVER/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    });  
    if (response.ok) {
      const resultContainer = document.getElementById('resultContainer');
      resultContainer.innerHTML = '<p>Registration successful.</p>';
    } else {
      const resultContainer = document.getElementById('resultContainer');
      resultContainer.innerHTML = '<p>Registration failed. Please try again.</p>';
    }
};

const getData = async () => {
    try {
        const response = await fetch('URL_SERVER/data');
        if (response.ok) {
            const data = await response.json();
            const resultContainer = document.getElementById('resultContainer');
        } else {
            console.error('Failed to fetch data.');
        }
    } catch (error) {
        console.error(error);
    }
};

const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', function () {
    window.location.href = 'login_page.html';
});
