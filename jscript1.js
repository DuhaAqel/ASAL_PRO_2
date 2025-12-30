const taskInput = document.getElementById("todo-input");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const inputError = document.getElementById("input-error");
const noTaskMsg = document.getElementById("masseg-notask");
let currentFilter = "All";
const filterButtons = document.querySelectorAll(".filter-button");
const deleteDoneBtn = document.getElementById("delete-donetask-button");
const deleteAllBtn = document.getElementById("delete-alltask-buttton");

const isValidTask = (text) => {
  if (text.trim() === "") {
    inputError.textContent = "Task cannot be empty";
    inputError.style.display = "block";
    return false;
  } 
   if (/^\d/.test(text)) {
    inputError.textContent = "Task cannot start with a number";
    inputError.style.display = "block";
    return false;
  }
 if (text.trim().length < 5) {
    inputError.textContent = "Task must be at least 5 characters long";
    inputError.style.display = "block";
    return false;
  }
