// Everything that touches localStorage lives here. No other file reads or
// writes localStorage directly, so if the way tasks are saved ever changes,
// this is the only file to edit.

const STORAGE_KEY = "tasks";

// Saves the whole task list. localStorage only stores strings,
// so the array is turned into JSON text first.
export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Loads the saved task list, or an empty list the first time the app runs
// (when nothing has been saved yet, getItem returns null).
export function loadTasks() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === null) {
    return [];
  }
  return JSON.parse(saved);
}


