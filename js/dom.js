// dom.js
// Finds the elements from index.html once, so every other file can import
// them instead of calling document.getElementById again.
// If an id in index.html changes, this is the only file to update.

export const taskNameInput = document.getElementById("task-name");
export const taskCategoryInput = document.getElementById("task-category");
export const taskDeadlineInput = document.getElementById("task-deadline");
export const taskStatusInput = document.getElementById("task-status");
export const addTaskButton = document.getElementById("add-task-button");
export const taskList = document.getElementById("task-list");
export const taskListSection = document.getElementById("task-list-section");
export const noTaskMessage = document.getElementById("no-task-message");

// Fills a <select> with one <option> per item in the list.
// Used by the form, the filters and the edit mode of a card.
export function addDropdownValues(selectElement, options) {
  for (const option of options) {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.innerText = option;
    selectElement.appendChild(optionElement);
  }
}