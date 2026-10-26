// app.js
// The starting point of the app. index.html loads only this file;
// the import lines below load every other file the app needs.
//
// File overview:
//   constants.js  the category and status lists
//   storage.js    saving and loading tasks in localStorage
//   tasks.js      the task list and the functions that change it
//   dom.js        the elements from index.html, and addDropdownValues()
//   taskCard.js   builds the card for one task, with edit and save
//   render.js     draws a list of task cards on the page
//   filters.js    the two filter dropdowns
//   form.js       the Add a task form

import { setupForm } from "./form.js";
import { addFilterDropdowns, applyFilters } from "./filters.js";

addFilterDropdowns();

// After a new task is added, redraw the list with the current filters
setupForm(applyFilters);

// Draw the saved tasks. Both filters start on "All", so every task shows.
applyFilters();