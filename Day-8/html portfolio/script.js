const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const contactMethod = document.querySelector(
    'input[name="contactMethod"]:checked'
  );

  if (!contactMethod) {
    alert("Please select your preferred contact method.");
    return;
  }

  alert(`Thank you ${name}! We will contact you via ${contactMethod.value}.`);
  form.reset();
});
