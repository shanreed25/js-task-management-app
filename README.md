# Task management App

> A Task Management App that allows users to add tasks with deadlines, assign categories, and update the status of each task

## Functionality
- Add new tasks with details such as the task name, category, deadline, and status.
- Update the status of tasks to reflect their progress (e.g., “In Progress,” “Completed,” “Overdue”).
- Automatically update task status based on the current date (tasks past their deadline will be marked as “Overdue”).
- Filter tasks by status or category.
- Persist task data using local storage so tasks are saved even after refreshing the page


## Adding New Tasks
- []Create input fields for the task name, category, deadline, and an initial status (e.g., “In Progress”).
- [X]Include an “Add Task” button that will add the task to the task list.
- [X]Each task should be stored as an object with properties such as task name, category, deadline, and status.
- [X]Add the task object to an array that holds all tasks.

### Steps
#### Add Tasks
- [x] Create form with input fields for the `task name`, `category`, `deadline`, and an `initial status` and an `Add Task` button that will add the task to the task list
- [x] Each task should be stored as an object with properties `task name`, `category`, `deadline`, and `status`
    ```js
    { 
        name: "Make a weekly meal plan", 
        category: "Personal", 
        deadline: "9/20/1026", 
        status: "In Progress"
    }
    ```
#### Update Task Status
- [X] Allow users to update the status of tasks




