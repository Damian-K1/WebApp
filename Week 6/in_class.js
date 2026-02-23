let button = document.getElementById("clickButton");

let paragraph = document.que

button.addEventListener("click", function() {
    let heading = document.getElementById("title");

    heading.textContent = "DOM is working!";
    heading.style.color = "blue";
    heading.style.backgroundColor = "yellow";

    let body = document.body;
    body.style.backgroundColor = "teal";
});