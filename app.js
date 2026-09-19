let tasks = [];

let taskNameInput = document.getElementById("task-name");
let addTaskButton = document.getElementById("add-task-button");
let taskList = document.getElementById("task-list");



function addTask(name){
    let newTask = {name: name};//create the task
    tasks.push(newTask);//add task to tasks list
    clearInput()
    return tasks //return task
};

function displayTask() {//1. Create function to display task list
    for (let task of tasks){//for every task
        let taskItem = document.createElement("li");//create a list element
        // console.log(task);
        taskItem.innerText = task.name;//give the list element the task name as the content
        // console.log(taskItem.innerText);
        taskList.appendChild(taskItem);//add list element to the taskList(ul element)
    }
}

//==================================================================================
/* These functions are not really needed because its just one line of code 
but using them helps me to easily read a function that uses it and immediately 
know what it is doing because the functions describe the action, also I may need to
reuse the functionality, so having a function that does it mean i do not have to
rewite it
*/
function clearInput() {
    taskNameInput.value = ''
}

function removeTaskList() {
    taskList.innerHTML = ""
}
//==================================================================================



addTaskButton.addEventListener("click", function () {
    let taskName = taskNameInput.value;//get the input value
    // console.log(taskName);
    // console.log(addTask(taskName));
    addTask(taskName);
    removeTaskList()//remove the current List of tasks from the HTML
    displayTask();//Display the task list with the new task added
    // console.log("button clicked");
});