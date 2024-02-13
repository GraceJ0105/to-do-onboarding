console.log("Hello")

const toDos = [];

// {title: "Buy milk", completed: boolean }

// // 1. Add event listener to Add button
// document.querySelector('#submitButton').addEventListener('click', () => {
// console.log("clicked")
// // 2. Grab the input element
// console.log(inputToDoElement.value)
// // 3. Check there is a value 


// })
// 4. If there is a value, create a new task


function addToDo(){
    // select the input element
    const inputToDoElement = document.querySelector('#inputToDo')
    // select the input value
    const title =  inputToDoElement.value
toDos.push({title: title, completed: false});

renderToDos()
}

// deleteToDo function

function deleteToDo(index){
   toDos.splice(index, 1)
   renderToDos()
}

// toggleToDo function 

function toggle(index) {

    toDos[index].completed = ! toDos[index].completed

    renderToDos();
}

function renderToDos() {
    const toDoListElement = document.querySelector('#toDoList')
    toDoListElement.innerHTML = ""
    toDos.forEach((toDo, index) => {
        const listElement = document.createElement("li")
        listElement.innerHTML = `
        <p>${toDo.title}</p>
        <p id="toggleElement">${toDo.completed ? "Completed" : "Pending"}</p>
        <button type="button" onclick="toggle(${index})">Toggle</button>
        <button type="button" onclick="deleteToDo(${index})">Delete</button>

        `

        toDoListElement.appendChild(listElement)

    })
}

