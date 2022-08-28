let c=0;

//add function

function addTask(){
    let task=document.getElementById("task").value;
    console.log(task);
    displayTask(task);
    clearInput();
    c++;
}

//display function 

function displayTask(newTask){
    document.getElementById("task-list").innerHTML +=`<li id="${c}">${newTask} <button onclick="deleteTask(${c})">Delete </button></li>`
}

//clear function

function clearInput(){
    document.getElementById("task").value="";
    document.getElementById("task").focus();
}

//delete function

function deleteTask(taskID){
    console.log("Deleting task"+taskID);
    document.getElementById(taskID).remove();
}