// filters.js
// The Filter By Status and Filter By Category dropdowns.
// Both dropdowns call the same applyFilters() function, which checks the two
// values together. Before the split, each dropdown had its own filter and
// its own copy of the card code, so choosing one filter replaced the other.

import { FILTER_CATEGORIES, FILTER_STATUSES } from "./constants.js";
import { taskListSection, addDropdownValues } from "./dom.js";
import { tasks } from "./tasks.js";
import { renderTasks } from "./render.js";

// Created in addFilterDropdowns(), read by applyFilters()
let categoryFilter;
let statusFilter;

// Creates the two dropdowns with their labels and adds them to the
// top of the task list section.
export function addFilterDropdowns() {
  statusFilter = document.createElement("select");
  categoryFilter = document.createElement("select");

  const statusLabel = document.createElement("label");
  statusLabel.innerText = "Filter By Status";
  const categoryLabel = document.createElement("label");
  categoryLabel.innerText = "Filter By Category";

  addDropdownValues(statusFilter, FILTER_STATUSES);
  addDropdownValues(categoryFilter, FILTER_CATEGORIES);

  // prepend() adds to the front, so the last one added ends up first:
  // the order on the page is status label, status, category label, category
  taskListSection.prepend(categoryFilter);
  taskListSection.prepend(categoryLabel);
  taskListSection.prepend(statusFilter);
  taskListSection.prepend(statusLabel);

  statusFilter.addEventListener("input", applyFilters);
  categoryFilter.addEventListener("input", applyFilters);
}

// Shows only the tasks that match both dropdowns.
// "All" matches every task, so with both set to "All" every task is shown.
// app.js also calls this after a task is added, so the new task follows the
// filters that are chosen.
export function applyFilters() {
  const category = categoryFilter.value;
  const status = statusFilter.value;

  const filtered = tasks.filter(function (task) {
    const categoryMatches = category === "All" || task.category === category;
    const statusMatches = status === "All" || task.status === status;
    return categoryMatches && statusMatches;
  });

  // applyFilters is passed as onSave, so saving an edit redraws the
  // list with the filters still applied
  renderTasks(filtered, applyFilters);
}