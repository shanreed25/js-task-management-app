# Task Management App

> A Task Management App that allows users to add tasks with deadlines, assign categories, and update the status of each task

**This is version 2 (the `main` branch).** Version 1, where all of the JavaScript is in one `app.js` file, is on the [`ps-sba`](https://github.com/shanreed25/js-task-management-app/tree/ps-sba) branch.

## Functionality
- Add new tasks with details such as the task name, category, deadline, and status.
- Update the status of tasks to reflect their progress (e.g., "In Progress," "Completed," "Overdue").
- Automatically update task status based on the current date (tasks past their deadline will be marked as "Overdue").
- Filter tasks by status or category.
- Delete tasks, with a confirmation first.
- Persist task data using local storage so tasks are saved even after refreshing the page.

## How to run it
The JavaScript is split into ES modules, which browsers will not run from a file opened directly (`file://`). Open `index.html` with the VS Code Live Server extension (right-click `index.html`, then Open with Live Server), or any other local server.

Tasks saved by version 1 still load, because both versions use the same `tasks` key in localStorage.

## What changed in version 2

### Why
- `app.js` was one 426-line file, which made it hard to read and hard to change.
- The code that builds a task card (title, status, overdue check, Edit button, save handler) was written three times: in `createTaskCard()` and again inside the category filter and the status filter. That is about 250 of the 426 lines.
- The copies had drifted apart. The ones inside the filters never called `saveTaskList()`, so an edit made while a filter was on was lost on refresh.
- Each filter dropdown had its own listener, so choosing a status threw away the category filter, and the reverse.

### What changed
- The JavaScript is now nine files in a `js/` folder, one job each, connected with `import` and `export`. `index.html` loads `js/app.js` with `<script type="module">`.
- A task card is built in one place, `taskCard.js`, and everything that shows tasks goes through one function, `renderTasks()`.
- Both filter dropdowns call one `applyFilters()` that checks category and status together, so one filter no longer overrides the other.
- Choosing "All" in a filter shows every task. Before, the code kept going after showing the list and filtered for a category named "All", which emptied the list.
- Every edit goes through `updateTask()`, which always saves to localStorage, so edits made while a filter is on are kept.
- After an edit is saved, the list is drawn again with the current filters, so a task that no longer matches disappears straight away.
- A new task follows the filters that are chosen, instead of the list going back to every task.
- An overdue task keeps showing its status. In version 1 "Overdue" replaced the status, even when the status was Done. Now a Done task is never overdue, and an overdue task's deadline line reads `Deadline Overdue | ...` in red.
- A task due today is no longer overdue all day. JavaScript reads a date-only string such as `"2026-11-05"` as midnight UTC, which in the US is the evening of November 4th, so the deadline had already passed when the day began. `isOverdue()` now reads the deadline as `"2026-11-05T23:59:59"`: a string with a time but no `Z` or offset is local time, and the last second of the day means a task only becomes overdue once its due date is completely over.
- Tasks can be deleted. Each card has a DELETE button that asks for confirmation, removes the task with `deleteTask()` and draws the list again with the filters still on. The function the card calls after a change was renamed from `onSave` to `onChange`, since it now runs after an edit and after a delete.
- `updateTask(taskId)`, which was never called, is gone, and so is the global `taskDate` variable (it was assigned without `let`, which ES modules do not allow).

## How the code works now

### Files
`index.html` loads only `js/app.js`, and the `import` lines in each file load the rest.

| File | What it does |
| --- | --- |
| `js/app.js` | The starting point: sets up the filters and the form, then draws the saved tasks |
| `js/constants.js` | The category and status lists (the filter lists are built from them, with "All" added) |
| `js/storage.js` | Saving and loading tasks in localStorage (the only file that uses localStorage) |
| `js/tasks.js` | The task list and the functions that change it: `addTask()`, `updateTask()`, `deleteTask()`, `isOverdue()` |
| `js/dom.js` | The elements from `index.html`, found once, and `addDropdownValues()` |
| `js/taskCard.js` | `createTaskCard()`: builds the card for one task, with its edit, save and delete buttons |
| `js/render.js` | `renderTasks()`: clears the list and draws a card for each task it is given |
| `js/filters.js` | The Filter By Status and Filter By Category dropdowns and `applyFilters()` |
| `js/form.js` | The Add a task form: fills its dropdowns, adds the task, clears the fields |

### How the files depend on each other
```
app.js ─┬─> form.js ────> tasks.js ──> storage.js
        └─> filters.js ─> render.js ─> taskCard.js ──> tasks.js
              (each file also imports dom.js and constants.js)
```
- Imports go one way only, so no two files import each other.
- `tasks.js` and `storage.js` never touch the page: they only work with task objects and localStorage.

### When the page loads
1. `app.js` calls `addFilterDropdowns()`, which creates the two filter dropdowns (both set to "All") and adds them to the Tasks section.
2. It calls `setupForm(applyFilters)`, which fills the form's category and status dropdowns and listens for clicks on Add Task.
3. It calls `applyFilters()`. With both filters on "All", every saved task is drawn.

The saved tasks are already loaded by then: `tasks.js` runs `loadTasks()` the first time any file imports it, and works out the next id as one more than the highest saved id.

### Adding a task
1. Clicking Add Task runs the handler in `form.js`. An empty name stops with an alert.
2. `addTask()` in `tasks.js` creates the task object, pushes it onto `tasks` and saves the list.
3. `form.js` clears the form, then calls `onTaskAdded`, which is `applyFilters`, so the list is drawn again with the current filters.

### Showing the list
- `applyFilters()` in `filters.js` keeps the tasks that match both dropdowns ("All" matches every task) and passes them to `renderTasks()`.
- `renderTasks(list, onChange)` in `render.js` empties the list, shows the "no tasks" message only when `list` is empty, and appends one card per task from `createTaskCard()`.
- `createTaskCard()` in `taskCard.js` always shows the task's status. When `isOverdue(task)` is true, the deadline line reads `Deadline Overdue | ...` and gets the `overdue` class, which turns the whole line red and bold.
- `isOverdue()` in `tasks.js` is true when the status is not Done and the end of the deadline day (11:59:59 PM in the user's time zone) has passed. A task with no deadline is never overdue: an empty deadline gives an invalid date (`NaN`), and `NaN < Date.now()` is false.

### Editing a task
1. Clicking EDIT on a card runs `showEditMode()` in `taskCard.js`, which swaps the card's text for inputs holding the current values and the EDIT button for SAVE.
2. Clicking SAVE calls `updateTask()`, which copies the new values onto the task and saves the list.
3. The card then calls `onChange`, which is `applyFilters`, so the list is drawn again with the filters still on.

While a card is in edit mode its DELETE button is removed. After SAVE the card is rebuilt from scratch, so the button comes back.

### Deleting a task
1. Clicking DELETE on a card asks `Delete "<task name>"?` with `confirm()`. Cancel stops here.
2. `deleteTask()` in `tasks.js` finds the task with `indexOf()`, removes it with `splice()` and saves the list. It changes the array in place because `tasks` is a `const` that other files import: `tasks = tasks.filter(...)` would not be allowed, and they would not see a new array. `indexOf()` finds the task because the card holds the actual task object from the array, not a copy.
3. The card calls `onChange`, so the list is drawn again with the filters still on. If no tasks are left to show, the "no tasks" message appears.

### Why some functions are passed in as parameters
`createTaskCard(task, onChange)` and `setupForm(onTaskAdded)` take the redraw function as a parameter instead of importing it. `filters.js` imports `render.js`, which imports `taskCard.js`, so if `taskCard.js` imported `filters.js` the files would import each other in a circle. Passing the function in keeps the imports going one way.

