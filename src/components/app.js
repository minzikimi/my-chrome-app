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

// const tasks = [];

// Save data to local storage
function saveDataToLocalStorage(tasks) {
  localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
}

// Load data from local storage
function loadFromLocalStorage() { 
  const taskJSON = localStorage.getItem(TASK_KEY);
  return taskJSON ? JSON.parse(taskJSON) : [];
}

// Handle submit
export function addTaskToList(event) {
  event.preventDefault();
  
  const form = event.target;
  
  const titleValue = form.querySelector("#todo-input").value;
  const dueDateValue = form.querySelector("#due-date").value;
  const priorityValue = form.querySelector("#priority").value;
  const categoryValue = form.querySelector("#category").value;

  if (!titleValue.trim() || !dueDateValue.trim()) { 
    alert("Please fill all the fields.");
    return;
  }

  const newTask = new Task(titleValue, dueDateValue, priorityValue, categoryValue);
  
  let existingTasks = loadFromLocalStorage();
  existingTasks.push(newTask);
  
  saveDataToLocalStorage(existingTasks);
  
  clearInput(form);
  
  displayTasks(existingTasks);
}


function displayTasks(tasksFromLocalStorage) {
  const taskList = document.querySelector("[data-lists]");
  
  // 기존 태스크 목록 초기화
  taskList.innerHTML = '';

  tasksFromLocalStorage.forEach(task => {
    const taskItem = document.createElement('div');
    taskItem.classList.add("task-item");
    
    const titleSpan = document.createElement("span");
    titleSpan.classList.add("task-title");
    titleSpan.textContent = task.title;

    const dateSpan = document.createElement("span");
    dateSpan.classList.add("task-date");
    dateSpan.textContent = task.dueDate;

    const categorySpan = document.createElement("span");
    categorySpan.classList.add("task-category");
    categorySpan.textContent = task.category;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.dataset.id = task.id;
   

    // 작업 항목에 추가
    taskItem.appendChild(titleSpan);
    taskItem.appendChild(dateSpan);
    taskItem.appendChild(categorySpan);
    taskItem.appendChild(deleteButton);

    // 작업 항목을 태스크 리스트에 추가
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
  setupDeleteTaskListener();
  const existingTasks = loadFromLocalStorage();
  if (existingTasks.length === 0) {
    const defaultTask = new Task("Sample Task", "2024-12-31", "medium", "personal");
    existingTasks.push(defaultTask);
    saveDataToLocalStorage(existingTasks);
  }
}