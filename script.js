document.addEventListener('DOMContentLoaded', function () {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Function to add a new task to the list
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }
  
      // Create a new list item (li element)
      const newTask = document.createElement('li');
      newTask.textContent = taskText;
  
      // Create a remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.classList.add('remove-btn');
  
      // Add click event listener to remove button
      removeButton.onclick = function () {
        taskList.removeChild(newTask);
  
        // Save tasks to local storage after removing
        saveTasksToLocalStorage();
      };
  
      // Append the remove button to the list item
      newTask.appendChild(removeButton);
  
      // Append the list item to the task list
      taskList.appendChild(newTask);
  
      // Clear the task input field
      taskInput.value = "";
  
      // Save tasks to local storage
      saveTasksToLocalStorage();
    }
  
    // Add an event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);
  
    // Add an event listener to the input field for "Enter" key press
    taskInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    // Function to save tasks to local storage
    function saveTasksToLocalStorage() {
      const tasks = [];
      const taskItems = taskList.querySelectorAll('li');
  
      taskItems.forEach(taskItem => {
        tasks.push(taskItem.textContent);
      });
  
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    // Function to load tasks from local storage
    function loadTasksFromLocalStorage() {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
      tasks.forEach(taskText => {
        // For each task, create a list item and append it to the task list
        const newTask = document.createElement('li');
        newTask.textContent = taskText;
  
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');
  
        removeButton.onclick = function () {
          taskList.removeChild(newTask);
          saveTasksToLocalStorage(); // Update local storage after removing
        };
  
        newTask.appendChild(removeButton);
        taskList.appendChild(newTask);
      });
    }
  
    // Load tasks when the page loads
    loadTasksFromLocalStorage();
  });
