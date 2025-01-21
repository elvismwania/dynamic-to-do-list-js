document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
  
    // Function to add a new task to the list
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText === '') {
        alert('Please enter a task.');
        return;
      }
  
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
  
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', () => {
        listItem.remove();
      });
  
      listItem.appendChild(removeBtn);
      taskList.appendChild(listItem);
  
      taskInput.value = ''; 
    }
  
    // Add Task Button Event Listener
    addTaskBtn.addEventListener('click', addTask);
  
    // Enter Key Event Listener
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    // Initial call to addTask (optional, to add initial tasks if needed)
    // addTask(); 
  });
