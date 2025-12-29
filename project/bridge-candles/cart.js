

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


window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.style.height = "65px";
  } else {
    navbar.style.height = "90px";
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const cartItems = document.getElementById("cartItems");
  const emptyText = document.getElementById("emptyText");
  const cartCount = document.getElementById("cart-count");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  renderCart();

  function renderCart() {
    cartItems.innerHTML = "";

    // ✅ CART COUNT
    cartCount.innerText = cart.length;

    if (cart.length === 0) {
      emptyText.style.display = "block";
      return;
    }

    emptyText.style.display = "none";

    cart.forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("cart-item");

      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" width="80" />
        <h4>${item.name}</h4>
        <span>$${item.price}</span>
        <button class="delete-btn" data-index="${index}">✖</button>
      `;

      cartItems.appendChild(div);
    });

    attachDeleteEvents();
  }

  function attachDeleteEvents() {
    document.querySelectorAll(".delete-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const index = btn.dataset.index;

        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      });
    });
  }
});
