# Task management App

> A Task Management App that allows users to add tasks with deadlines, assign categories, and update the status of each task

## Functionality
- Add new tasks with details such as the task name, category, deadline, and status.
- Update the status of tasks to reflect their progress (e.g., “In Progress,” “Completed,” “Overdue”).
- Automatically update task status based on the current date (tasks past their deadline will be marked as “Overdue”).
- Filter tasks by status or category.
- Persist task data using local storage so tasks are saved even after refreshing the page


## Objective
**Create a dynamic task management app that lets users:**

- [X] Add new tasks with details such as the task name, category, deadline, and status.
- [] Update the status of tasks to reflect their progress (e.g., “In Progress,” “Completed,” “Overdue”).
- [] Automatically update task status based on the current date (tasks past their deadline will be marked as “Overdue”).
- [] Filter tasks by status or category.
- [] Persist task data using **local storage** so tasks are saved even after refreshing the page.

---

## Project Requirements

### 1. Adding New Tasks

- [X] Create input fields for the **task name**, **category**, **deadline**, and an initial **status** (e.g., “In Progress”).
- [X] Include an “Add Task” button that will add the task to the task list.
- [X] Each task should be stored as an **object** with properties such as task name, category, deadline, and status.
- [X] Add the task object to an **array** that holds all tasks.

### 2. Displaying the Task List

- [X] Create an HTML structure (such as an unordered list or table) to display the task list.
- [X] For each task, display the **task name**, **category**, **deadline**, and **status**.
- D[X] ynamically update the task list in the browser each time a new task is added or a status is updated.

### 3. Updating Task Status

- Allow users to **update the status** of tasks (e.g., “In Progress,” “Completed”) via a dropdown or button.
- Automatically check each task’s deadline and mark tasks as **“Overdue”** if the current date has passed the deadline.
- Update the displayed task list whenever a task’s status changes.

### 4. Filtering Tasks

- Add functionality to **filter tasks** by category or status (e.g., show only “Completed” tasks or tasks under the “Work” category).
- Provide a dropdown or set of buttons for users to choose a filter.
- When a filter is selected, only display the tasks that match the selected category or status.

### 5. Persisting Task Data with Local Storage

- Use **local storage** to save the current state of the task list so that tasks are restored when the page is refreshed.
- Ensure that task data (including name, category, deadline, and status) is stored and retrieved correctly.


### Current Status
> App allows you to
- This code allows you to type task in input and choose a catgory, deadline, and status then click add task button to add the new task. 
- Each task has an id properrty that I will need to access a task to update it
- The task list containing all the tasks, and their category, deadline, status and an edit button will be displayed in the HTML page. 
- Each task has an event listener that is inside the createTaskElements() function because this is where I have access to the id.
- Currently when the button is clicked i get access to the id, which  is only looged in the console for now
- If there are no tasks, there is a no task message displayed.
