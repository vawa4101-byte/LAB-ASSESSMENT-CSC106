const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load saved tasks
window.onload = function () {
    loadTasks();
};

function addTask() {

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    createTask(taskInput.value);

    saveTasks();

    taskInput.value = "";
}

function createTask(taskText) {

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>

        <div>

            <button class="complete" onclick="completeTask(this)">
                Complete
            </button>

            <button class="delete" onclick="deleteTask(this)">
                Delete
            </button>

        </div>
    `;

    taskList.appendChild(li);
}

function completeTask(button){

    button.parentElement.parentElement.classList.toggle("completed");

    saveTasks();

}

function deleteTask(button){

    button.parentElement.parentElement.remove();

    saveTasks();

}

function saveTasks(){

    const tasks = [];

    document.querySelectorAll("#taskList li").forEach(li=>{

        tasks.push({

            text: li.querySelector("span").innerText,

            completed: li.classList.contains("completed")

        });

    });

    localStorage.setItem("plannerTasks", JSON.stringify(tasks));

}

function loadTasks(){

    const tasks = JSON.parse(localStorage.getItem("plannerTasks")) || [];

    tasks.forEach(task=>{

        createTask(task.text);

        const lastTask = taskList.lastElementChild;

        if(task.completed){

            lastTask.classList.add("completed");

        }

    });

}