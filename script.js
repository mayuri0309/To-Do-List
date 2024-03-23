

const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
const taskText = taskInput.value.trim();
 if ( taskText !== '') {
const li = document.createElement ('li');
li.textContent = taskText;
taskList.appendChild(li);
taskInput.value = '';

const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.addEventListener('click', deleteTask);
li.appendChild(deleteBtn);

li.addEventListener('click', completeTask);

}
}


function completeTask(event) {
    const task = event.target;
    task.classList.toggle('completed');
    }
    

function deleteTask(event) {
const task= event.target.parentElement;
taskList.removeChild(task);
}




