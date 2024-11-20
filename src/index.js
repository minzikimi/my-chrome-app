//index.js

import { initApp } from '../src/components/app.js';
import { loadForm } from '../src/components/form.js';
import { loadTaskList } from '../src/components/loadList.js';
import { upcomingTaskList } from '../src/components/upcomingTask.js';

import { setRandomBackgroundImage } from '../src/accessories/background.js';
import { startClock } from "../src/accessories/clock.js";
import { initName } from "../src/accessories/name.js";
import { generateQuote } from "../src/accessories/quotes.js";

document.addEventListener('DOMContentLoaded', () => {

  setRandomBackgroundImage();
  startClock();
  initName();
  generateQuote();


  const content = document.getElementById('content');
  content.appendChild(loadTaskList());
  initApp();

  const todoListMenuBtn = document.querySelector("#todo-btn");
  todoListMenuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(loadTaskList());
    initApp(); // Initialize the app after loading task list
  });

  const upcomingTaskBtn = document.querySelector("#upcoming-btn");
  upcomingTaskBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(upcomingTaskList());
     // Initialize the app after loading task list
  });

  const addTaskMenuBtn = document.querySelector("#add-task-btn");
  addTaskMenuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(loadForm());
    initApp(); // Initialize the app to add event listeners to the form
  });



  const menuToggle = document.querySelector('.menu-toggle');
  const sideMenu = document.querySelector('.side-menu');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    sideMenu.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      menuToggle.classList.remove('active');
      sideMenu.classList.remove('active');
    }
  });
  
});