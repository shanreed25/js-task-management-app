let taskNameInput = document.getElementById("task-name");
let taskCategoryInput = document.getElementById("task-category");
let taskDeadlineInput = document.getElementById("task-deadline");
let taskStatusInput = document.getElementById("task-status");
let addTaskButton = document.getElementById("add-task-button");
let taskList = document.getElementById("task-list");
let taskListSection = document.getElementById("task-list-section");
let noTaskMessage = document.getElementById("no-task-message");

//the first item in this array should always be "Other", 
// because it is the default
const CATEGORIES = [ "Other", "Personal", "Work",];

//the first item in this array should always be "Not Started", 
// because it is the default
const STATUSES = ["Not Started", "In Progress", "Paused", "Done"];

console.log(STATUSES.includes("In Progress"));

function addDropdownValues(el, options){
  
  for (let i =0; i < options.length; i++){
    let dropOptionElement = document.createElement("option");
    // console.log(`i alone returns the index: ${i}`);
    // console.log(`options[i] returns the value at that index: ${options[i]}`);
    dropOptionElement.value= options[i];
    dropOptionElement.innerText = options[i];
    el.appendChild(dropOptionElement);
  
    console.log(dropOptionElement);
  }
    console.log(el);

}

addDropdownValues(taskCategoryInput, CATEGORIES);
addDropdownValues(taskStatusInput, STATUSES);

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

        //Edit Task
        taskItem.addEventListener("click", function (e) {
          let updateName = document.createElement("input");//create new input
          let updateDeadline = document.createElement("input");
          updateDeadline.type = "date";
          let saveButton = document.createElement("button");//create save button
          if (e.target === taskEditButton){
            saveButton.innerText = "SAVE";
            saveButton.id = "save-task-button";
            updateName.value = task.name;
            updateDeadline.value = task.deadline;

            taskTitle.replaceWith(updateName);//replace title with input 
            taskDeadline.replaceWith(updateDeadline);
            taskEditButton.replaceWith(saveButton);//replace edit button with save button

            saveButton.addEventListener("click", function(){
              task.name = updateName.value;//adding it to the task object
              task.deadline = updateDeadline.value;

              taskTitle.innerText = task.name;//adding update to the title
              taskDeadline.innerText = task.deadline;

              updateDeadline.replaceWith(taskDeadline);
              updateName.replaceWith(taskTitle);
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
  taskCategoryInput.value = CATEGORIES[0];
  taskStatusInput.value = STATUSES[0];
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

