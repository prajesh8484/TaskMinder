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

