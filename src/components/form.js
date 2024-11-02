export function loadForm() {
  const template = document.getElementById("task-form-template");
  const formElement = template.content.cloneNode(true); // Clone the template content
  return formElement; // Return cloned form element
}