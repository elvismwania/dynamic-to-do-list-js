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
  
    // Function to remove a task
    function removeTask(event) {
      const listItem = event.target.parentNode;
      taskList.removeChild(listItem);
  
      // Remove the task from the tasks array
      const taskText = listItem.textContent.slice(0, -1); // Remove the "X"
      tasks = tasks.filter(task => task !== taskText);
  
      // Update Local Storage
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    // Event listener for adding tasks
    addTaskBtn.addEventListener("click", addTask);
  
    // Event listener for removing tasks (using event delegation)
    taskList.addEventListener("click", (event) => {
      if (event.target.classList.contains("remove-btn")) {
        removeTask(event);
      }
    });
  });
