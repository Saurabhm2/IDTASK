// Sample initial task list
const tasks = [
    { id: 1, text: 'Complete homework', completed: false },
    { id: 2, text: 'Read a book', completed: true },
    { id: 3, text: 'Go for a run', completed: false }
];


function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = `task ${task.completed ? 'completed' : ''}`;
        taskItem.innerHTML = `
            <span>${task.text}</span>
            <button onclick="toggleTask(${task.id})">Toggle</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}


function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const text = newTaskInput.value.trim();

    if (text !== '') {
        const newTask = { id: tasks.length + 1, text, completed: false };
        tasks.push(newTask);
        newTaskInput.value = '';
        renderTasks();
    }
}


function toggleTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}


function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

// Initial render
renderTasks();
