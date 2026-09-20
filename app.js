let tasks = [];

let taskNameInput = document.getElementById("task-name");
let taskCategoryInput = document.getElementById("task-category");
let addTaskButton = document.getElementById("add-task-button");
let taskList = document.getElementById("task-list");



function addTask(){
    let taskName = taskNameInput.value;//get the input value
    if (taskName === ''){
        alert('Please enter a task')
        return;
    }

    let taskCategory = taskCategoryInput.value
    if (taskCategory === ''){
        taskCategory = "Other"
    }

    
    let newTask = {name: taskName, category: taskCategory};//create the task

    tasks.push(newTask);//add task to tasks list
    clearInput()
    // return tasks
};

function displayTask() {
    for (let task of tasks){//for every task
        let taskItem = document.createElement("li");//create a list element
        let taskInfo = document.createElement("div");//create a div element to hold task information
        let taskTitle = document.createElement("h3");
        let taskCategory = document.createElement("h4");
        // console.log(task);
        taskTitle.innerText = task.name;//give the list element the task name as the content
        taskCategory.innerText = task.category;//give the list element the task name as the content
        // console.log(taskItem.innerText);
        taskInfo.append(taskTitle, taskCategory)
        taskItem.appendChild(taskInfo)
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
    taskCategoryInput.value = ''
}

function removeTaskList() {
    taskList.innerHTML = ""
}
//==================================================================================



addTaskButton.addEventListener("click", function () {
    // let taskName = taskNameInput.value;//get the input value
    // console.log(taskName);
    // console.log(addTask());
    addTask();
    removeTaskList()//remove the current List of tasks from the HTML
    displayTask();//Display the task list with the new task added
    // console.log("button clicked");
});