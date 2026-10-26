// render.js
// Draws a list of tasks on the page. Every part of the app that shows tasks
// (starting up, adding a task, filtering, saving an edit) goes through
// renderTasks(), so the list is always drawn the same way.

import { taskList, noTaskMessage } from "./dom.js";
import { createTaskCard } from "./taskCard.js";

// Clears the current cards and draws one card per task in `list`.
// `list` can be every task or only the ones that match the filters.
//
// onSave is passed on to each card, which calls it after an edit is saved
// (filters.js passes applyFilters, so the list is redrawn with the filters).
export function renderTasks(list, onSave) {
  taskList.innerHTML = ""; // remove the cards that are on the page now

  // The message is written once in index.html; here it is only shown or hidden
  noTaskMessage.hidden = list.length > 0;

  for (const task of list) {
    taskList.appendChild(createTaskCard(task, onSave));
  }
}