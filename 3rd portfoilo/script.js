// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Update time every second
setInterval(() => {
  const now = new Date();
  document.getElementById('time').textContent = now.toLocaleTimeString();
}, 1000);

// Scroll to contact
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
}

// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    document.getElementById("feedback").textContent = "All fields are required.";
    document.getElementById("feedback").style.color = "red";
  } else {
    document.getElementById("feedback").textContent = "Message sent successfully!";
    document.getElementById("feedback").style.color = "green";
    document.getElementById("contactForm").reset();
  }
});
