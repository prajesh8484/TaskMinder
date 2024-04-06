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
}

function deleteTask(taskElement) {
    var li = taskElement.parentElement;
    li.remove();
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
        }
    }
});
