// export function loadForm() {
//   const template = document.getElementById("task-form-template");
//   const formElement = template.content.cloneNode(true); // Clone the template content
//   return formElement; // Return cloned form element
// }


import { addTaskToList } from './app.js';

export function loadForm() {
  const template = document.getElementById("task-form-template");
  const formElement = template.content.cloneNode(true);
  
  // Add event listener to the form
  const form = formElement.querySelector('#todo-form');
  form.addEventListener('submit', addTaskToList);

  return formElement;
}