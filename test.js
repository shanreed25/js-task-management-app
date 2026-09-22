const tasks = [
  {
    name: "Go shopping for a dress for wedding",
    category: "Personal",
    deadline: "2026-11-05",
    status: "In Progress"
  },
  {
    name: "Submit Q3 client invoices",
    category: "Work",
    deadline: "2026-09-15",
    status: "Pending"
  },
  {
    name: "Renew car registration",
    category: "Errands",
    deadline: "2026-09-10",
    status: "Pending"
  },
  {
    name: "Finish CTS Launch Camp curriculum outline",
    category: "Work",
    deadline: "2026-10-01",
    status: "In Progress"
  },
  {
    name: "Book dentist appointment",
    category: "Personal",
    deadline: "2026-08-30",
    status: "Done"
  },
  {
    name: "Prepare October class materials",
    category: "Work",
    deadline: "2026-09-25",
    status: "Pending"
  }
];

function updateStatus(taskId, newStatus){
    let task = tasks.find(t => t.id === taskId);
    task.status = newStatus
    console.log(task);

}

//Create status dropdown

// for(let item of STATUES){
//   let statusOption = document.createElement("option");
//   statusOption.value = item;
//   statusOption.innerText = item;
//   console.log(item);
//   console.log(task.status);
//   if(item === task.status){
//     statusOption.selected = true;
//   }
//   statusDropdown.appendChild(statusOption)
// }
// let notStartedOption = document.createElement("option")
// notStartedOption.value = task.status
// notStartedOption.innerText = task.status
// statusDropdown.appendChild(notStartedOption);