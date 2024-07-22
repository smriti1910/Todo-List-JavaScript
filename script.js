let tasks = [];

document.getElementById('add-task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const dueDate = document.getElementById('task-due-date').value;
    const task = { title, description, dueDate, complete: false };
    tasks.push(task);
    renderTaskList();
    document.getElementById('add-task-form').reset();
});

document.getElementById('task-list').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const index = Array.prototype.indexOf.call(document.getElementById('task-list').children, e.target);
        tasks[index].complete = !tasks[index].complete;
        renderTaskList();
    } else if (e.target.classList.contains('delete-btn')) {
        const index = Array.prototype.indexOf.call(document.getElementById('task-list').children, e.target.parentNode);
        tasks.splice(index, 1);
        renderTaskList();
    }
});

function renderTaskList() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.textContent = `${task.title} - ${task.description} - ${task.dueDate}`;
        if (task.complete) {
            taskElement.classList.add('task-complete');
        }
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        taskElement.appendChild(deleteBtn);
        taskList.appendChild(taskElement);
    });
}

renderTaskList();
