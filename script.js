const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Check localStorage on load
window.addEventListener("DOMContentLoaded", () => {
  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  if (savedUser && savedPass) {
    existingBtn.style.display = "block";
  }
});

// Handle form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    // Save credentials
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    existingBtn.style.display = "block";
  } else {
    // Remove credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    existingBtn.style.display = "none";
  }
});

// Existing user login
existingBtn.addEventListener("click", function () {
  const savedUser = localStorage.getItem("username");

  if (savedUser) {
    alert(`Logged in as ${savedUser}`);
  }
});