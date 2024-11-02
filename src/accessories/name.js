const greeting = document.querySelector("#greeting");
const nameForm = document.querySelector(".app-title form");
const nameInput = document.querySelector("#nameInput");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function handleNameSubmit(e) {
  e.preventDefault();
  const name = nameInput.value.trim();
  if (name) {
    localStorage.setItem(USERNAME_KEY, name);
    updateGreeting(name);
  }
  nameInput.value = "";
}

function updateGreeting(name) {
  greeting.textContent = `Hello ${name}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  nameForm.classList.add(HIDDEN_CLASSNAME);
}

function showNameForm() {
  greeting.classList.add(HIDDEN_CLASSNAME);
  nameForm.classList.remove(HIDDEN_CLASSNAME);
  nameInput.focus();
}

function init() {
  const savedUserName = localStorage.getItem(USERNAME_KEY);
  if (savedUserName) {
    updateGreeting(savedUserName);
  } else {
    showNameForm();
  }
}

nameForm.addEventListener("submit", handleNameSubmit);
greeting.addEventListener("click", showNameForm);

init();


