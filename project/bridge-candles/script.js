// Toggle Menu for Mobile
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}


window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});



let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const heroTitle = document.getElementById("heroTitle");

/* Text for each slide */
const titles = ["FLAME", "LIGHT", "SCENT"];

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");

  // Change text based on slide
  heroTitle.textContent = titles[index];
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

/* Auto slide */
setInterval(nextSlide, 3000);

// Cart Feedback
const buttons = document.querySelectorAll(".product-card button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.textContent = "ADDED ✓";
    setTimeout(() => {
      btn.textContent = "ADD TO CART";
    }, 1500);
  });
});


// Shop Button Alert

document.querySelector(".shop-btn").addEventListener("click", () => {
  alert("Redirecting to Shop...");
});



// Fade-in animation
window.addEventListener("load", () => {
  const section = document.querySelector(".aroma-section");
  section.style.opacity = "0";
  section.style.transition = "opacity 1.2s ease";

  setTimeout(() => {
    section.style.opacity = "1";
  }, 200);
});


// Simple testimonial pagination simulation
const testimonials = [
  {
    title: "GREAT SERVICE",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "TERRY ORTEGA",
    role: "Interior Designer",
    avatar: "./assets/servicesprofile1.png",
    
  },
  {
    title: "AMAZING QUALITY",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "SARAH WILLIAMS",
    role: "Product Manager",
    avatar: "./assets/servicesprofile2.png",
  },
  {
    title: "PERFECT EXPERIENCE",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "MICHAEL BROWN",
    role: "Creative Director",
    avatar: "./assets/servicesprofile3.png",
    
  }
];

const section = document.querySelector(".testimonial-section");
const pages = document.querySelectorAll(".pagination span");

const titleEl = document.getElementById("testimonial-title");
const textEl = document.getElementById("testimonial-text");
const nameEl = document.getElementById("author-name");
const roleEl = document.getElementById("author-role");
const avatarEl = document.getElementById("author-img");

pages.forEach(page => {
  page.addEventListener("click", () => {
    const index = Number(page.dataset.index);
    const data = testimonials[index];
    if (!data) return;

    // Active state
    pages.forEach(p => p.classList.remove("active"));
    page.classList.add("active");

    // Fade
    // section.style.opacity = "0";

    setTimeout(() => {
      titleEl.textContent = data.title;
      textEl.textContent = `"${data.text}"`;
      nameEl.textContent = data.name;
      roleEl.textContent = data.role;
      avatarEl.src = data.avatar;
      
    //   section.style.opacity = "1";
    }, 300);
  });
});

// Cart Page Display
const cartBtn = document.querySelector(".cart-btn");
const cartPage = document.getElementById("cartPage");
const cartItems = document.getElementById("cartItems");
const emptyText = document.getElementById("emptyText");

const cartCount = document.getElementById("cart-count");

// GET CART FROM STORAGE
document.addEventListener("DOMContentLoaded", () => {
  const cartCount = document.getElementById("cart-count");

  // Get existing cart or empty array
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Show count on load
  cartCount.textContent = cart.length;

  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;
      const price = button.dataset.price;

      // Add product
      cart.push({ name, price, image: button.closest(".product-card").querySelector("img").src });

      // SAVE TO localStorage (MOST IMPORTANT)
      localStorage.setItem("cart", JSON.stringify(cart));

      // Update count
      cartCount.textContent = cart.length;

      // UI feedback
      button.textContent = "ADDED ✓";
      setTimeout(() => {
        button.textContent = "Add to Cart";
      }, 1000);
    });
  });
});




