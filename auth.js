function login() {
  const email = document.getElementById("email").value;

  if (!email) return alert("Enter email");

  localStorage.setItem("user", email);
  window.location.href = "discover.html";
}
