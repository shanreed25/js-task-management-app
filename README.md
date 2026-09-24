# Task management App

> A Task Management App that allows users to add tasks with deadlines, assign categories, and update the status of each task

## Functionality
- Add new tasks with details such as the task name, category, deadline, and status.
- Update the status of tasks to reflect their progress (e.g., “In Progress,” “Completed,” “Overdue”).
- Automatically update task status based on the current date (tasks past their deadline will be marked as “Overdue”).
- Filter tasks by status or category.
- Persist task data using local storage so tasks are saved even after refreshing the page


## Reflection
> One of the hardest parts was a simplest feature, surprisingly, the "no tasks" message. I kept trying to create and remove that element on every render, which added extra logic each time. Once I stopped overthinking it, I put the message in the HTML once and showed or hid it based on whether the filtered list was empty. The lesson was that stable parts of the page belong in the HTML, and JavaScript only needs to toggle them. Local storage was also a bit tricky because it was one of the last things I did I had to refactor some things to get it to work. Filtering was a little hard I got the category to filter but could not figure out why status was not filtering correctly. Testing with `console.log()` made bugs easier to isolate. With more time, I would have fix the bug in the status filter, added deleting tasks, made the UI look a little better and refactored my code.
### Current Status
- Code allows you to type task in input and choose a catgory, deadline, and status then click add task button to add the new task. 
- Each task has an id properrty that I will need to access a task to update it
- The task list containing all the tasks, and their category, deadline, status and an edit button will be displayed in the HTML page. 
- If there are no tasks, there is a no task message displayed.
- Each task has an event listener that is inside the createTaskElements() function because this is where I have access to the id.
- The category and status options in the form are added through JavaScript when the page loads
- Currently when the edit button
    - the edit button is removed and a save button appears in its place
    - I can edit the task name, deadline, status, and category
- Overdue working
- Filter working
- local storage working

### Bugs
- if I filter by category and then change category, it does not automatically morve from current filter
- I filterd be category and status, but one overides the other so iwant to fix this later