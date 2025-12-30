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
 inputError.style.display = "none";
  return true;
};


function showDialog({
  title = "",
  message = "",
  inputValue = "",
  confirmText = "Save",
   cancelText = "Cancel",
  showInput = false,
  onConfirm,
  onCancel,
})

 {
  const oldDialog = document.getElementById("custom-dialog");
  if (oldDialog) oldDialog.remove();
   const overlay = document.createElement("div");
  overlay.id = "custom-dialog";
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
 overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.background = "rgba(0,0,0,0.18)";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";

