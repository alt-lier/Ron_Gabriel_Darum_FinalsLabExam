
// Frontend-only demo authentication. Never use this pattern for real accounts.
const DEMO_ID = "2026-00125";
const DEFAULT_PASSWORD = "student123";
const storedPassword = () => localStorage.getItem("cc_demo_password") || DEFAULT_PASSWORD;
if (localStorage.getItem("cc_session") === "active" && location.pathname.endsWith("index.html")) location.href = "dashboard.html";
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  document.getElementById("togglePassword").addEventListener("click", () => {
    const field = document.getElementById("password");
    field.type = field.type === "password" ? "text" : "password";
    document.querySelector("#togglePassword i").className = field.type === "password" ? "bi bi-eye" : "bi bi-eye-slash";
  });
  document.getElementById("forgotPassword").addEventListener("click", e => {
    e.preventDefault();
    document.getElementById("loginFeedback").innerHTML = '<div class="alert alert-info small">For this demo, use the sample password shown below. Password recovery is not connected to a real account.</div>';
  });
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const id = document.getElementById("studentId").value.trim().toLowerCase();
    const pass = document.getElementById("password").value;
    const validId = id === DEMO_ID.toLowerCase() || id === "john.santos@campus.edu";
    if (!id || !pass) {
      document.getElementById("loginFeedback").innerHTML = '<div class="alert alert-danger small">Please complete both fields.</div>'; return;
    }
    if (!validId || pass !== storedPassword()) {
      document.getElementById("loginFeedback").innerHTML = '<div class="alert alert-danger small">The student ID/email or password is incorrect. Try the demo credentials.</div>'; return;
    }
    localStorage.setItem("cc_session", "active");
    localStorage.setItem("cc_remember", document.getElementById("remember").checked ? "yes" : "no");
    location.href = "dashboard.html";
  });
}
