let tasks = [];
let taskNameInput = document.getElementById("task-name");
let taskCategoryInput = document.getElementById("task-category");
let taskDeadlineInput = document.getElementById("task-deadline");
let taskStatusInput = document.getElementById("task-status");
let addTaskButton = document.getElementById("add-task-button");
let taskList = document.getElementById("task-list");
let taskListSection = document.getElementById("task-list-section");
let noTaskMessage = document.getElementById("no-task-message");

function addTask(name, category, deadline, status) {
  let newTask = {
    //create the task
    name: name,
    category: category,
    deadline: deadline,
    status: status,
  };

  tasks.push(newTask); //add task to tasks list
  clearFields();
}

function displayTask() {
    noTaskMessage.hidden = tasks.length > 0;//Clears no tasks message when there are tasks
    for (let task of tasks) {
        //For every task create a Task Card
        let taskItem = document.createElement("li"); //create a list element
        let taskInfo = document.createElement("div"); //create a div element to hold task information
        let taskTitle = document.createElement("h3");
        let taskCategory = document.createElement("h4");
        let taskDeadline = document.createElement("h5");
        let taskStatus = document.createElement("h5");

        //Give the card the task content
        taskTitle.innerText = task.name;
        taskCategory.innerText = task.category;
        taskDeadline.innerText = task.deadline;
        taskStatus.innerText = task.status;

        //Display Task in HTML
        taskInfo.append(taskTitle, taskCategory, taskDeadline, taskStatus);
        taskItem.appendChild(taskInfo);
        taskList.appendChild(taskItem);
    }
}

function clearFields() {
  taskNameInput.value = "";
  taskCategoryInput.value = "Other";
  taskStatusInput.value = "Not Started";
}

//removes the taskList from the HTML page
function removeTaskList() {
  taskList.innerHTML = "";
}

//==================================================================================

displayTask();

addTaskButton.addEventListener("click", function () {
  let taskName = taskNameInput.value; //get the input value
  if (taskName === "") {
    alert("Please enter a task");
    return;
  }

  let taskCategory = taskCategoryInput.value;
  let taskDeadline = taskDeadlineInput.value;
  let taskStatus = taskStatusInput.value;

  addTask(taskName, taskCategory, taskDeadline, taskStatus);
  removeTaskList(); //remove the current List of tasks from the HTML
  displayTask(); //Display the task list with the new task added
  
});


