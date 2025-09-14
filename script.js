const taskInput = document.getElementById('task-input');
const taskDate = document.getElementById('task-date');
const taskTime = document.getElementById('task-time');
const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');  
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
    const title = taskInput.value.trim(); 
    const date = taskDate.value; 
    const time = taskTime.value;  

    if (!title) {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement('li');

    const taskText = document.createElement('span');
    taskText.classList.add('task-title');
    taskText.textContent = title;

    const taskDatetime = document.createElement('div');
    taskDatetime.classList.add('task-datetime');
    taskDatetime.textContent = `${date ? date : 'No Date'} ${time ? time : ''}`;

    const actions = document.createElement('div');
    actions.classList.add('task-actions');

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
        const newTitle = prompt("Edit task name:", taskText.textContent);
        const newDate = prompt("Edit date (YYYY-MM-DD):", date);
        const newTime = prompt("Edit time (HH:MM):", time);

        if (newTitle !== null && newTitle.trim() !== '') {
            taskText.textContent = newTitle.trim();
        }
        taskDatetime.textContent = `${newDate ? newDate : 'No Date'} ${newTime ? newTime : ''}`;
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    actions.appendChild(editBtn);  
    actions.appendChild(deleteBtn);

    li.appendChild(taskText);
    li.appendChild(taskDatetime);
    li.appendChild(actions);

    taskList.appendChild(li);

    taskInput.value = '';
    taskDate.value = '';
    taskTime.value = '';
});

clearBtn.addEventListener('click', () => {
    taskList.innerHTML = '';
});