/* MAP TOGGLE */
function toggleMap(btn) {
  const map = btn.previousElementSibling;

  if (map.style.display === "none" || map.style.display === "") {
    map.style.display = "block";
    btn.textContent = "Hide Map"; 
  } else {
    map.style.display = "none";
    btn.textContent = "Show Map"; 
  }
}


/* TODO LIST */
let tasks = [];
const list = document.getElementById("taskList");

function render() {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${task}</span>
      <button class="btn outline" onclick="removeTask(${index})">
        Remove
      </button>
    `;

    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.marginBottom = "6px";

    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");

  if (!input.value.trim()) return;

  tasks.push(input.value.trim());
  input.value = "";
  render();
}

function removeTask(index) {
  tasks.splice(index, 1);
  render();
}

function clearTasks() {
  tasks = [];
  render();
}

/* TIMER */
let sec = 0;
let running = true;
const timer1 = document.getElementById("timer1");

function updateTimer() {
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  timer1.textContent = `Time elapsed: 00:${m}:${s}`;
}

setInterval(() => {
  if (running) {
    sec++;
    updateTimer();
  }
}, 1000);

function toggleTimer() {
  running = !running;
}

function resetTimer() {
  sec = 0;
  updateTimer();
}

/* FORM VALIDATION */
function validateForm() {
  let ok = true;

  if (!name.value.trim()) {
    nameErr.textContent = "Please enter your name.";
    ok = false;
  } else {
    nameErr.textContent = "";
  }

  if (!email.value.includes("@")) {
    emailErr.textContent = "Please enter a valid email.";
    ok = false;
  } else {
    emailErr.textContent = "";
  }

  if (password.value.length < 6) {
    passErr.textContent = "Minimum 6 characters required.";
    ok = false;
  } else {
    passErr.textContent = "";
  }

  if (ok) {
    successMsg.textContent = "Form validated successfully!";
  }

  return false; // prevent page reload
}
