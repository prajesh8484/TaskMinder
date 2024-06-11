function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value.trim();
    
    if (task === "") {
        alert("Please enter a task!");
        return;
    }
    
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.innerHTML = task + '<span class="delete" onclick="deleteTask(this)"> &times;</span>';
    taskList.appendChild(li);
    
    input.value = "";
    updateTaskListInLocalStorage(); 
}

function deleteTask(taskElement) {
    var li = taskElement.parentElement;
    li.remove();
    updateTaskListInLocalStorage(); 
}

function updateTaskListInLocalStorage() {
    var taskList = document.getElementById("taskList");
    var tasks = [];
    for (var i = 0; i < taskList.children.length; i++) {
        tasks.push(taskList.children[i].innerText);
    }
    localStorage.setItem("taskList", JSON.stringify(tasks));
}

document.getElementById("taskInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Delete") {
        var taskList = document.getElementById("taskList");
        if (taskList.children.length > 0) {
            taskList.removeChild(taskList.children[0]);
            updateTaskListInLocalStorage(); 
        }
    }
});

window.onload = function() {
    var storedTasks = localStorage.getItem("taskList");
    if (storedTasks) {
        var tasks = JSON.parse(storedTasks);
        var taskList = document.getElementById("taskList");
        for (var i = 0; i < tasks.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = tasks[i] + '<span class="delete" onclick="deleteTask(this)"> &times;</span>';
            taskList.appendChild(li);
        }
    }
};
