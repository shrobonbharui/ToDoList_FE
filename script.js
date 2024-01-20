const userInput = document.getElementById('userInput');
const addButton = document.getElementById('addButton');
const taskCount = document.getElementById('taskCount');
const allCompleteButton = document.getElementById('allCompleteButton');
const allClearButton = document.getElementById('allClearButton');
const taskList = document.getElementById('taskList');


addButton.addEventListener("click", addTask);

allCompleteButton.addEventListener("click", toggleAllCompleted);

allClearButton.addEventListener("click", clearAllTasks);

function addEventListeners(li) {
    const check = li.querySelector(".check");
    const deleteBtn = li.querySelector(".delete");
    check.addEventListener("click", toggleTask);
    deleteBtn.addEventListener("click", deleteTask);
}


function addTask (){
    const taskText = userInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML =`
            <span class="check">&#10003;</span>
            <span CLASS="subject">${taskText}</span>
            <span class="delete">X</span>
        `;
        taskList.appendChild(li);
        userInput.value = "";
        addEventListeners(li);
        updateTaskCount();
    }
    else{
        alert("YOU MUST WRIGHT SOME TASK");
    }
}


function toggleTask(event) {
    const check = event.target;
    const task = check.parentElement;
    task.classList.toggle("completed");
    updateTaskCount();
}
  
function deleteTask(event) {
    const deleteBtn = event.target;
    const task = deleteBtn.parentElement;
    taskList.removeChild(task);
    updateTaskCount();
}


function toggleAllCompleted() {
    const tasks = taskList.children;
    let allCompleted = true;
  
    for (const task of tasks) {
      const check = task.querySelector(".check");
      const completed = task.classList.contains("completed");
  
      if (!completed) {
        allCompleted = false;
        break;
      }
    }
  
    for (const task of tasks) {
      const check = task.querySelector(".check");
      const completed = task.classList.contains("completed");
  
      if (allCompleted) {
        task.classList.remove("completed");
        if (!completed) {
          check.textContent = "";
        }
      } else {
        task.classList.add("completed");
        if (!completed) {
          check.textContent = "✓";
        }
      }
    }
  
    updateTaskCount();
}


function clearAllTasks() {
    taskList.innerHTML = ""; 
    updateTaskCount();
}
  

function updateTaskCount() {
    const totalTasks = taskList.children.length;
    const completedTasks = taskList.querySelectorAll(".completed").length;
    taskCount.textContent = `${completedTasks} tasks completed out of ${totalTasks} total tasks`;
}
