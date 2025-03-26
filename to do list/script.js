// Function to add a new task
function addTask() {
    // Get the input value
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();

    // Check if the input is empty
    if (taskValue === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item for the task
    const li = document.createElement("li");

    // Create a span for the task name
    const taskText = document.createElement("span");
    taskText.textContent = taskValue;
    li.appendChild(taskText);

    // Create a "Remove" button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
        li.remove();
    };
    li.appendChild(removeButton);

    // Add event listener to toggle completed state
    li.onclick = function() {
        li.classList.toggle("completed");
    };

    // Append the task item to the list
    document.getElementById("todoList").appendChild(li);

    // Clear the input field
    taskInput.value = "";
}








   
/*//function to add a new task
 function addTask() {
    //Get the input value
    const taskInput = document.getElementById("taskInput");
    const taskvalue = taskInput.value.trim();

    //check if the input is empty
    if(taskvalue === ""){
        alert("please enter a task");
        return;
    }
    //create a newlist item from  the task
    const li=document.createElement("li")

    //create a span for the task name
    const taskText =document.createElement("span")
    taskText.textcontent = taskvalue;
    li.appendChild(taskText);

    //create remove button 
    const removeButton=document.createElement("button");
    removeButton.textcontent ="Remove";
    removeButton.onclick = function() {
        li.remove();
    };
    li.appendChild(removeButton);

    //Add Event listner
    li.addEventListener ("click" ,function () {
        li.classList.toggle("completed");
         });

      //append the task item to the list  
      document.getElementById("todoList").appendChild(li);

      //clear the inpuit field
       taskInput.value = "";
     }*/
    
