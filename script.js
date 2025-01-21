document.addEventListener('DOMContentLoaded', () => {
    // All your JavaScript code will go here
  
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
  
    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value;
      if (taskText !== "") {
        const newTask = document.createElement("li");
        newTask.textContent = taskText;
        taskList.appendChild(newTask);
        taskInput.value = ""; 
      }
    });
  
    // ... rest of your code (e.g., for removing tasks)
  });
