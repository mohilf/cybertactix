document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = document.getElementById('email').value.trim();
  const passwordInput = document.getElementById('password').value.trim();
  const authMessage = document.getElementById('authMessage');

  const matchedUser = users.find(user => user.email === emailInput && user.password === passwordInput);

  if (matchedUser) {
    localStorage.setItem('userId', matchedUser.id);
    localStorage.setItem('userEmail', matchedUser.email);
    sessionStorage.setItem('userEmail', matchedUser.email);

    if (matchedUser.email === "ctadmin@gmail.com") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "dashboard.html";
    }
  } else {
    authMessage.textContent = 'Invalid credentials or not authorized.';
  }
});
