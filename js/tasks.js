// tasks.js
// The task data and the functions that change it. This file knows nothing
// about the page (no document, no elements): it only works with task objects.
// Every change goes through a function here, and each one saves the list,
// so a change can never be forgotten in localStorage.

import { saveTasks, loadTasks } from "./storage.js";

// The one task list the whole app shares. Other files import it to read it.
// It is a const because the variable always points to the same array;
// the array itself can still have tasks added to it.
export const tasks = loadTasks();

// The next id to give out: one more than the highest saved id,
// so ids stay unique after a page refresh.
let nextId = tasks.reduce((max, task) => Math.max(max, task.id), -1) + 1;

// Creates a task, adds it to the list and saves the list.
export function addTask(name, category, deadline, status) {
  const newTask = {
    id: nextId++,
    name: name,
    category: category,
    deadline: deadline,
    status: status,
  };
  tasks.push(newTask);
  saveTasks(tasks);
  return newTask;
}

// Copies the changed fields onto an existing task and saves the list.
// `changes` is an object such as { name: "New name", status: "Done" }.
export function updateTask(task, changes) {
  Object.assign(task, changes);
  saveTasks(tasks);
}

// Removes a task from the list and saves the list.
export function deleteTask(task) {
  const index = tasks.indexOf(task);
  if (index !== -1) {
    tasks.splice(index, 1);
    saveTasks(tasks);
  }
}


// A task is overdue once the whole day of its deadline has 
// passed, in the user's local time
// A task with no deadline gives NaN here, and NaN < now is false,
// so it is never overdue.
export function isOverdue(task) {
  // A finished task is never overdue
  if (task.status === "Done") return false;
  //added a time to the string before it is turned into a Date
  const deadline = new Date(task.deadline + "T23:59:59").getTime();
  return deadline < Date.now();
}