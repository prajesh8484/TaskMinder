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

function modifyButtons() {
    
    var githubButton = document.querySelector('.github-button');
    var downloadButton = document.querySelector('.download-button');

    var buttonsContainer = document.querySelector('.buttons');
    buttonsContainer.style.width = '175px';
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.alignItems = 'center';
    buttonsContainer.style.justifyContent = 'space-around';

    var githubImageSrc = 'assets/logo.png';
    var downloadImageSrc = 'assets/download-2-512.png';

    var imageHeight = '36px'; 
        githubButton.innerHTML = '<img src="assets/logo.png" alt="GitHub" style="height:' + imageHeight + '; width: 35px;' + '; padding-left: 7px;' + '; padding-right: 7px;' + ';">';
        downloadButton.innerHTML = '<img src="assets/download-2-512.png" alt="Download" style="height: 42px' + '; width: 35px;' + '; padding-left: 5px;' + '; padding-right: 5px;' + ';">';
}

var screenWidth = window.innerWidth;
if (screenWidth < 600) {
modifyButtons();
}
