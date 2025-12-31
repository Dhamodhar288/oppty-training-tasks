function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

// toggleDropdown
function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu");
  const arrow = document.querySelector(".arrow");

  menu.style.display =
    menu.style.display === "flex" ? "none" : "flex";

  arrow.classList.toggle("rotate");
}

// smooth typing effect
const roles = ["Designer", "Developer", "Freelancer"];
  const textEl = document.getElementById("changing-text");

  let roleIndex = 0;
  let charIndex = 0;
  let typing = true;

  function animateText() {
    const currentRole = roles[roleIndex];

    if (typing) {
      textEl.textContent = currentRole.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentRole.length) {
        typing = false;
        setTimeout(animateText, 1200); // pause after typing
        return;
      }
    } else {
      textEl.textContent = currentRole.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        typing = true;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(animateText, typing ? 120 : 80);
  }

  animateText();


// Animate skill bars on page load
  window.addEventListener("load", () => {
  const bars = document.querySelectorAll(".progress-bar");

  bars.forEach(bar => {
    const value = bar.getAttribute("data-width");
    bar.style.width = value + "%";
  });
});

// Animate resume items on page load

const items = document.querySelectorAll(".resume-item");

items.forEach((item, index) => {
  item.style.opacity = 0;
  item.style.transform = "translateY(20px)";

  setTimeout(() => {
    item.style.transition = "0.6s ease";
    item.style.opacity = 1;
    item.style.transform = "translateY(0)";
  }, index * 150);
});

// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
  this.reset();
});
