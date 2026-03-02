let form = document.getElementById("taskForm");
let input = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let error = document.getElementById("error");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let taskText = input.ariaValueMax.trim();

    if (taskText === "") {
        error.textContent = "Please enter a task.";
        return;
    }

    error.textContent = "";

    let li = document.createElement("li");

    
});


    
