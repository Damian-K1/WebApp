let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");



addBtn.addEventListener("click", function () {
    let text = taskInput.value.trim();
    if (text !== "") {
        let li = document.createElement("li");
        li.textContent = text;

        li.addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        li.addEventListener("dblclick", function () {
            taskList.removeChild(li);
        });

        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
});