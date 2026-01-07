const slides = [
  {
    title: "Innovative Solutions<br />Unleashed",
    features: ["Advanced IT", "Tailored Strategies", "Scalable Growth"]
  },
  {
    title: "Future ready<br />technology",
    features: ["Ai automation", "efficient bpo", "proactive aiops"]
  },
  {
    title: "Elevate online<br />presence",
    features: ["stunning webistes", "robust security", "E-commerce optimization"]
  }
];

const titleEl = document.getElementById("heroTitle");
const featuresEl = document.getElementById("heroFeatures");
const animatedBox = document.getElementById("heroAnimated");
const dots = document.querySelectorAll(".slider-dots span");

let index = 0;
let interval;

/* build features HTML */
function renderFeatures(list) {
  featuresEl.innerHTML = `
    <span>${list[0]}</span>
    <span class="dot"></span>
    <span>${list[1]}</span>
    <span class="dot"></span>
    <span>${list[2]}</span>
  `;
}

/* change slide */
function changeSlide(newIndex) {
  animatedBox.style.opacity = "0";
  animatedBox.style.transform = "translateX(60px)";

  setTimeout(() => {
    index = newIndex;

    titleEl.innerHTML = slides[index].title;
    renderFeatures(slides[index].features);

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");

    animatedBox.classList.remove("animate");
    void animatedBox.offsetWidth; // force reflow
    animatedBox.classList.add("animate");
  }, 400);
}

/* auto slide */
function startAutoSlide() {
  interval = setInterval(() => {
    changeSlide((index + 1) % slides.length);
  }, 3500);
}

/* dot click */
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    clearInterval(interval);
    changeSlide(i);
    startAutoSlide();
  });
});

/* init */
renderFeatures(slides[0].features);
startAutoSlide();
