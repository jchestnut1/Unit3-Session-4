const studentInput=document.getElementById("studentName");

function addStudent(){
    let student=studentInput.value;
    console.log("Adding.... + student");
    displayStudent(student);
    clearInput();
}

function displayStudent(newStudent){
    let student=document.getElementById("student-list").innerHTML += `<li class="item">${newStudent}</li>`;
}

function displayStudent(newStudent){
    document.getElementById("student-list").innerHTML = `<li>${newStudent}</li>`;
}