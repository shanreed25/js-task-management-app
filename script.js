let tasks = [];
let counter = 0;

function addTask(name, category, deadline, status ="Not Started"){
    let newTask = {id: counter++, name: name, category: category, deadline: deadline, status: status}
    tasks.push(newTask)

}

addTask("Write report", "Work", "2026-09-25", "In Progress");
addTask("Buy groceries", "Personal", "2026-09-19");
addTask("Write report", "School", "2026-10-19", "In Progress");
console.log(tasks)

function updateStatus(taskId, newStatus){

}