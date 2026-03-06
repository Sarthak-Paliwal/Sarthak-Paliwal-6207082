const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const pendingContainer = document.getElementById("pendingTasks");
const completedContainer = document.getElementById("completedTasks");

function addTask() {
  const taskText = input.value.trim();

  if (!taskText) {
    alert("Please enter a task");
    return;
  }

  const taskItem = createTaskElement(taskText);
  pendingContainer.appendChild(taskItem);

  input.value = "";
  input.focus();
}

function createTaskElement(text) {
  const taskItem = document.createElement("div");
  taskItem.className = "task-item";

  const span = document.createElement("span");
  span.textContent = text;

  const btnContainer = document.createElement("div");

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.className = "complete-btn";

  completeBtn.addEventListener("click", () => {
    moveToCompleted(taskItem);
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", () => {
    taskItem.remove();
  });

  btnContainer.appendChild(completeBtn);
  btnContainer.appendChild(deleteBtn);

  taskItem.appendChild(span);
  taskItem.appendChild(btnContainer);

  return taskItem;
}

function moveToCompleted(taskItem) {
  taskItem.classList.add("completed");

  const completeBtn = taskItem.querySelector(".complete-btn");
  if (completeBtn) completeBtn.remove();

  completedContainer.appendChild(taskItem);
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
