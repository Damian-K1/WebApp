// Get elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task when button is clicked
addBtn.addEventListener("click", function () {
    
    const taskText = taskInput.value.trim();

    // 1 & 3. Prevent adding empty tasks
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // 4. Click to mark as completed
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // 5. Double click to remove task
    li.addEventListener("dblclick", function () {
        taskList.removeChild(li);
    });

    // Add task to list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
});