let tasks = [];

function addTask(name, category, deadline, status ="Not Started"){
    let newTask = {taskName: name, taskCategory: category, taskDeadline: deadline, taskStatus: status}
    tasks.push(newTask)

}

addTask("Write report", "Work", "2026-09-25", "In Progress");
console.log(tasks)