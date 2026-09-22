let taskNameInput = document.getElementById("task-name");
let taskCategoryInput = document.getElementById("task-category");
let taskDeadlineInput = document.getElementById("task-deadline");
let taskStatusInput = document.getElementById("task-status");
let addTaskButton = document.getElementById("add-task-button");
let taskList = document.getElementById("task-list");
let taskListSection = document.getElementById("task-list-section");
let noTaskMessage = document.getElementById("no-task-message");
// let statusDropdown = document.createElement("select")


let tasks = [];
let taskId = 0;//to be able to acces a certain task i need an id

//takes the task input information and add it to the task list
// then clears the input field
function addTask(name, category, deadline, status) {
  let newTask = {
    //create the task
    id: taskId++,
    name: name,
    category: category,
    deadline: deadline,
    status: status,
  };
  console.log(newTask);
  tasks.push(newTask); //add task to tasks list
  clearFields();
}

//Create a task item list to be displayed in the UI
function createTaskElements(){
      for (let task of tasks) {
        //
        /*
          For every task create a Task Card with this shape
          <li><div><h3></h3><h5></h5><h5></h5><h5></h5></div><button></button></li>
        */
        let taskItem = document.createElement("li");
        let taskInfo = document.createElement("div");
        taskInfo.className = "task";
        let taskTitle = document.createElement("h3");
        let taskCategory = document.createElement("p");
        let taskDeadline = document.createElement("p");
        let taskStatus = document.createElement("p");
        let taskEditButton = document.createElement('button')

        //Give the card elements the content of the task
        taskTitle.innerText = task.name;
        taskCategory.innerText = `Category | ${task.category}`;
        taskDeadline.innerText = `Deadline | ${task.deadline}`;
        taskStatus.innerText = `Status | ${task.status}`;
        taskEditButton.innerText = "EDIT";
        // taskEditButton.id = `${task.id}-edit-button`;
        

        //Display Task in HTML
        taskInfo.append(taskTitle, taskStatus, taskCategory, taskDeadline, taskEditButton );
        taskItem.append(taskInfo);
        taskList.appendChild(taskItem);

        //this function is where I have access to the id from each task
        taskItem.addEventListener("click", function (e) {
          let updateInput = document.createElement("input");//create new input
          let saveButton = document.createElement("button");//create save button
          if (e.target === taskEditButton){
            saveButton.innerText = "SAVE";
            saveButton.id = "save-task-button"

            updateInput.value = task.name;

            taskTitle.replaceWith(updateInput);//replace title with input 
            taskEditButton.replaceWith(saveButton);//replace edit button with save button

            saveButton.addEventListener("click", function(){
              task.name = updateInput.value
              taskTitle.innerText = task.name
              updateInput.replaceWith(taskTitle);
              saveButton.replaceWith(taskEditButton)
              console.log(`Saved: ${task.name}`);
            });

            console.log(task.name)
            console.log(`Edit Button clicked for task with id of ${task.id}`);
            
        }
      });
    }
}

function displayTask() {
    noTaskMessage.hidden = tasks.length > 0;//Clears no tasks message when there are tasks
    createTaskElements();
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


function updateTask(taskId){
    let task = tasks.find(t => t.id === taskId);
    console.log(task)

}


// function updateTask(taskId, newTaskInfo){
//     let task = tasks.find(t => t.id === taskId);
//     task.status = newStatus
//     return task;

// }


displayTask();
//==================================================================================



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



//===================================================

