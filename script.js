document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn'); // Corrected line
    const taskList = document.getElementById('task-list');
  
    addTaskBtn.addEventListener('click', function() { 
      const newTask = taskInput.value.trim();
  
      if (newTask === '') {
        alert('Please enter a task.');
        return;
      }
  
      const listItem = document.createElement('li');
      listItem.textContent = newTask;
  
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', () => {
        listItem.remove();
      });
  
      listItem.appendChild(removeBtn);
      taskList.appendChild(listItem);
  
      taskInput.value = '';
    });
  });
