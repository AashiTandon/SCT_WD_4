document.addEventListener("DOMContentLoaded", function() {
    const addTaskButton = document.getElementById("taskBtn");
    addTaskButton.addEventListener("click", addTask);

    function addTask() {
        const inputElement = document.getElementById('taskInput');
        const taskValue = inputElement.value;

        if (taskValue.trim() === '') {
            return; 
        }

        const taskList = document.getElementById("task_list");

        const taskItem = document.createElement("div");
        taskItem.className = "task-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "task_" + new Date().getTime();
        checkbox.checked = true; // Checkbox is initially checked

        const label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.textContent = taskValue;

        checkbox.addEventListener("change", function() {
            if (!checkbox.checked) {
                label.classList.add("strikethrough");
            } else {
                label.classList.remove("strikethrough");
            }
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "✖";
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(label);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        inputElement.value = '';
    }
});
