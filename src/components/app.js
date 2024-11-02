// app.js

class Task {
  constructor(title, dueDate, priority, category) {
    this.id = Date.now(); //set id
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.category = category;
    this.completed = false;
  }
}

const TASK_KEY = "tasks";

// Save data to local storage
function saveDataToLocalStorage(tasks) {
  localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
}

// Load data from local storage
function loadFromLocalStorage() { 
  const taskJSON = localStorage.getItem(TASK_KEY);
  return taskJSON ? JSON.parse(taskJSON) : [];
}

// Add task to array
function addTaskToList(event) {
  event.preventDefault();
  
  const form = document.querySelector("#todo-form");
  
  const titleValue = form.querySelector("#todo-input").value;
  const dueDateValue = form.querySelector("#due-date").value;
  const priorityValue = form.querySelector("#priority").value;
  const categoryValue = form.querySelector("#category").value;

  if (!titleValue.trim() || !dueDateValue.trim()) { 
    alert("Please fill all the fields.");
    return; // Return if validation fails
  }

  const newTask = new Task(titleValue, dueDateValue, priorityValue, categoryValue);
  
  let existingTasks = loadFromLocalStorage();
  existingTasks.push(newTask);
  
  saveDataToLocalStorage(existingTasks);
  
  clearInput(form);
  
  displayTasks(existingTasks);
}

// Display tasks on the UI
// function displayTasks(tasksFromLocalStorage) {
//   const taskList = document.querySelector("[data-lists]");
//   taskList.innerHTML = '';
  
//   tasksFromLocalStorage.forEach(task => {
//     const taskItem = document.createElement('div');
//     taskItem.classList.add("task-item");
    
//     const titleSpan = document.createElement("span");
//     titleSpan.classList.add("task-title");
//     titleSpan.textContent = task.title;

//     const dateSpan = document.createElement("span");
//     dateSpan.classList.add("task-date");
//     dateSpan.textContent = task.dueDate;

//     const categorySpan = document.createElement("span");
//     categorySpan.classList.add("task-category");
//     categorySpan.textContent = task.category;

//     const deleteButton = document.createElement("button");
//     deleteButton.classList.add("delete-btn");
//     deleteButton.textContent = "삭제";
//     deleteButton.dataset.id = task.id;

//     taskItem.appendChild(titleSpan);
//     taskItem.appendChild(dateSpan);
//     taskItem.appendChild(categorySpan);
//     taskItem.appendChild(deleteButton);

//     taskList.appendChild(taskItem);
//   });
// }

function displayTasks(tasksFromLocalStorage) {
  const taskList = document.querySelector("[data-lists]");
  
  if (!taskList) {
      console.error("Task list element not found!");
      return;
  }

  taskList.innerHTML = ""; // Clear existing tasks
  
  tasksFromLocalStorage.forEach(task => {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    
    taskItem.innerHTML = `
      <span class="task-title">${task.title}</span>
      <span class="task-date">${task.dueDate}</span>
      <span class="task-category">${task.category}</span>
      <button class="delete-btn" data-id="${task.id}">Delete</button>
    `;
    
    taskList.appendChild(taskItem);
  });
}
// Clear input fields
function clearInput(form) {
  form.reset();
}

// Remove tasks by ID
function removeTasks(taskId) {
  let existingTasks = loadFromLocalStorage();
  
  existingTasks = existingTasks.filter(task => task.id !== taskId);
  
  saveDataToLocalStorage(existingTasks);
  
  displayTasks(existingTasks);
}

// Load and display tasks from local storage
function loadAndDisplayTasks() {
  let existingTasks = loadFromLocalStorage();
  console.log("Loaded tasks from local storage:", existingTasks); // Log loaded tasks
  displayTasks(existingTasks);
}

// Set up form submit event listener
function setupFormSubmitListener() {
  const form = document.querySelector("#todo-form");
  
  if (form) {
      form.addEventListener("submit", (event) => {
          addTaskToList(event); // Call addTaskToList function
      });
  }
}

// Set up delete button click event listener
function setupDeleteTaskListener() {
  const taskList = document.querySelector("[data-lists]");
  
  if (taskList) { 
      taskList.addEventListener("click", (event) => {
          if (event.target.matches(".delete-btn")) { 
              const taskId = parseInt(event.target.dataset.id); 
              removeTasks(taskId); 
          }
      });
  }
}

export function initApp() {
  loadAndDisplayTasks(); 
  setupFormSubmitListener(); 
  setupDeleteTaskListener(); 
    // Check if there are any tasks in local storage
    const existingTasks = loadFromLocalStorage();
    if (existingTasks.length === 0) {
        // If no tasks exist, create a default task
        const defaultTask = new Task("Sample Task", "2024-12-31", "medium", "personal");
        existingTasks.push(defaultTask);
        saveDataToLocalStorage(existingTasks); 
    }
}
