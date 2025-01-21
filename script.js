document.addEventListener('DOMContentLoaded', () => {

    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
  
    // Load tasks from Local Storage or initialize an empty array
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    // Function to add a task
    function addTask() {
      const taskText = taskInput.value;
      if (taskText !== "") {
        const newTask = document.createElement("li");
        newTask.textContent = taskText;
  
        // Add remove button to each task
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "X";
        removeBtn.classList.add("remove-btn");
        newTask.appendChild(removeBtn);
  
        taskList.appendChild(newTask);
        taskInput.value = "";
  
        // Add task to the tasks array
        tasks.push(taskText);
  
        // Save tasks to Local Storage
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    }
  
    // Event listener for adding tasks
    addTaskBtn.addEventListener("click", addTask);
  
    // ... rest of your code (e.g., for removing tasks)
  });
