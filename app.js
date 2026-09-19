let tasks = [];

let taskNameInput = document.getElementById("task-name");//  1. Get the input field
let addTaskButton = document.getElementById("add-task-button");//2. Get the button

function addTask(name){// 3. Create addTask function
    let newTask = {name: name};//create the task
    tasks.push(newTask);//add task to tasks list
    return tasks //return task
};



addTaskButton.addEventListener("click", function () {//4. add event listener to button
    let taskName = taskNameInput.value;//get the input value
    console.log(taskName);
    console.log(addTask(taskName));
    // console.log("button clicked");
});