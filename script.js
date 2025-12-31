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

   overlay.style.justifyContent = "center";
  overlay.style.zIndex = 9999;
  const dialog = document.createElement("div");
  dialog.className = "dialog-box";

   const h2 = document.createElement("div");
  h2.className = "dialog-title";
  h2.textContent = title;
  dialog.appendChild(h2);

   if (message) {
    const msg = document.createElement("div");
    msg.textContent = message;
 msg.style.marginBottom = "14px";
    msg.style.textAlign = "center";
    dialog.appendChild(msg);
  }

 let input;
  if (showInput) {
    input = document.createElement("input");
 input.type = "text";
    input.value = inputValue;
    input.className = "dialog-input";
    dialog.appendChild(input);
  }


   const btns = document.createElement("div");
  btns.className = "dialog-actions";

  const okBtn = document.createElement("button");
  okBtn.className = "dialog-save";
  okBtn.textContent = confirmText;

  if (title === "Rename Task") {
    okBtn.style.backgroundColor = "#0d6efd";
    okBtn.style.color = "#fff";
  } else {
    okBtn.style.backgroundColor = "#e0e0e0";
    okBtn.style.color = "#000";
  }
}