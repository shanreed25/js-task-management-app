// taskCard.js
// Builds the card for one task: its title, status, category, deadline and
// an EDIT button that swaps the text for inputs. This is the only place a
// card is built. Before the split, this code was copied into each filter.

import { CATEGORIES, STATUSES } from "./constants.js";
import { addDropdownValues } from "./dom.js";
import { updateTask, isOverdue } from "./tasks.js";

// Returns a new <li> for the task. It does not add it to the page:
// renderTasks() in render.js does that.
//
// onSave is a function the card calls after the task is saved. renderTasks()
// passes one in that redraws the list, so an edited task that no longer
// matches the current filter disappears straight away.
export function createTaskCard(task, onSave) {
  const taskItem = document.createElement("li");
  const taskInfo = document.createElement("div");
  taskInfo.className = "task";

  const taskTitle = document.createElement("h3");
  const taskStatus = document.createElement("p");
  const taskCategory = document.createElement("p");
  const taskDeadline = document.createElement("p");
  const taskEditButton = document.createElement("button");

  // Give the card elements the content of the task
  taskTitle.innerText = task.name;
  taskCategory.innerText = `Category | ${task.category}`;
  taskDeadline.innerText = `Deadline | ${task.deadline}`;
  taskStatus.innerText = isOverdue(task) ? "Overdue" : `Status | ${task.status}`;
  taskEditButton.innerText = "EDIT";

  taskInfo.append(taskTitle, taskStatus, taskCategory, taskDeadline, taskEditButton);
  taskItem.append(taskInfo);

  // Clicking EDIT turns the card into a small form
  taskEditButton.addEventListener("click", function () {
    showEditMode(task, onSave, {
      taskTitle,
      taskStatus,
      taskCategory,
      taskDeadline,
      taskEditButton,
    });
  });

  return taskItem;
}

// Replaces each piece of text on the card with an input that holds the
// task's current value, and the EDIT button with a SAVE button.
// `parts` holds the card's text elements, so they can be swapped out.
function showEditMode(task, onSave, parts) {
  const nameInput = document.createElement("input");
  nameInput.value = task.name;

  const deadlineInput = document.createElement("input");
  deadlineInput.type = "date";
  deadlineInput.value = task.deadline;

  const categoryInput = document.createElement("select");
  addDropdownValues(categoryInput, CATEGORIES);
  categoryInput.value = task.category;

  const statusInput = document.createElement("select");
  addDropdownValues(statusInput, STATUSES);
  statusInput.value = task.status;

  const saveButton = document.createElement("button");
  saveButton.innerText = "SAVE";

  parts.taskTitle.replaceWith(nameInput);
  parts.taskStatus.replaceWith(statusInput);
  parts.taskCategory.replaceWith(categoryInput);
  parts.taskDeadline.replaceWith(deadlineInput);
  parts.taskEditButton.replaceWith(saveButton);

  saveButton.addEventListener("click", function () {
    // updateTask() changes the task object and saves the list to localStorage
    updateTask(task, {
      name: nameInput.value,
      deadline: deadlineInput.value,
      category: categoryInput.value,
      status: statusInput.value,
    });

    // Redraw the list. The new card is built from the updated task,
    // so there is no need to swap the inputs back by hand.
    onSave();
  });
}