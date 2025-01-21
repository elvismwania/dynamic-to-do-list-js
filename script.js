document.addEventListener('DOMContentLoaded', function() {

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
      removeButton.onclick = function() {
        taskList.removeChild(newTask); 
      };
  
      // Append the remove button to the list item
      newTask.appendChild(removeButton);
  
      // Append the list item to the task list
      taskList.appendChild(newTask);
  
      // Clear the task input field
      taskInput.value = "";
    }
  
    // Add an event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);
  
    // Add an event listener to the input field for "Enter" key press
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    // Invoke addTask on DOMContentLoaded (if needed for initial tasks) - You can uncomment this if you need it.
    // addTask(); 
  });
