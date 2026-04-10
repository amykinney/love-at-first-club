function login() {
  const email = document.getElementById("email").value;

  if (!email) {
    alert("Please enter email");
    return;
  }

  localStorage.setItem("user", email);

  window.location.href = "discover.html";
}
