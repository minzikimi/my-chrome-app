export function loadTaskList() {
  console.log("im clicked")
  const template = document.getElementById("task-list-template");
  const taskListElement = template.content.cloneNode(true); // Clone the template content
  return taskListElement; // Return cloned task list element
}