// form.js
// The Add a task form: filling its dropdowns, reading it when the
// Add Task button is clicked, and clearing it afterwards.

import { CATEGORIES, STATUSES } from "./constants.js";
import {
  taskNameInput,
  taskCategoryInput,
  taskDeadlineInput,
  taskStatusInput,
  addTaskButton,
  addDropdownValues,
} from "./dom.js";
import { addTask } from "./tasks.js";

// Sets up the form. `onTaskAdded` is a function to call after a task is
// added (app.js passes applyFilters, which redraws the list).
// Passing it in means this file does not need to know how the list is drawn.
export function setupForm(onTaskAdded) {
  addDropdownValues(taskCategoryInput, CATEGORIES);
  addDropdownValues(taskStatusInput, STATUSES);

  addTaskButton.addEventListener("click", function () {
    const taskName = taskNameInput.value;
    if (taskName === "") {
      alert("Please enter a task");
      return;
    }

    addTask(taskName, taskCategoryInput.value, taskDeadlineInput.value, taskStatusInput.value);
    clearFields();
    onTaskAdded();
  });
}

// Puts the form back to its starting values
function clearFields() {
  taskNameInput.value = "";
  taskCategoryInput.value = CATEGORIES[0];
  taskStatusInput.value = STATUSES[0];
}