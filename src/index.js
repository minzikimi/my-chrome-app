import { initApp } from '../src/components/app.js';
import { loadForm } from '../src/components/form.js';
import { loadTaskList } from '../src/components/loadList.js';
import { upcomingTaskList } from '../src/components/upcomingTask.js';

document.addEventListener('DOMContentLoaded', () => {

  

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
});