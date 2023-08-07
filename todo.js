let id = 0;

function addFields() {
    const todoText = document.querySelector("#todoText").value;
    const todoDate = document.querySelector("#todoDate").value;
    const todoField = document.createElement("div");
    todoField.classList.add("flexx");
    todoField.innerHTML = `<div class="inpText ${id++}">${todoText}</div>
                            <div class="inpDate">${todoDate}</div>
                            <button class="remove-todo" >Remove</button>`;
    insertTodoInOrder(todoField);
}

let todoArray = [];

function insertTodoInOrder(todoElement) {
    //todoArray = JSON.parse(localStorage.getItem("items")) || [];
    //console.log(todoArray[0]);

    todoArray.push(todoElement);
    todoArray.sort((a, b) => {
        return new Date(a.querySelector('.inpDate').innerText).getTime() - new Date(b.querySelector('.inpDate').innerText).getTime();
    });

    const todoField = document.querySelector('.todo-fields');

    todoArray.length === 0 && todoField.appendChild(todoElement);

    for (let i = 0; i < todoArray.length; i++) {
        todoField.appendChild(todoArray[i]);
    }
    console.log(todoArray);
    localStorage.setItem("items", JSON.stringify(todoArray));
    console.log(localStorage.getItem("items"));


    const rmButtons = document.querySelectorAll(".remove-todo");

    rmButtons.forEach(item => item.addEventListener('click', event => {
        const containerDiv = event.target.parentElement;
        for (let i = 0; i < todoArray.length; i++) {
            if (todoArray[i].children.item(0).classList.item(1) === containerDiv.children.item(0).classList.item(1)) {
                todoArray.splice(i, 1);
                break;
            }
        }
        containerDiv.remove();
    }));


    /*const existingTodos = document.querySelectorAll('.flexx');

    let position = 0;
    for (let i = existingTodos.length - 1; i >= 0; i--) {
        const existingTodoDate = new Date(existingTodos[i].querySelector('.inpDate').innerText).getTime();
        if (todoDate <= existingTodoDate) {
            position = i + 1;
            break;
        }
    }
    const todoField = document.querySelector('.todo-fields');
    if (position === existingTodos.length) {
        todoField.appendChild(todoElement);
    } else {
        todoField.insertBefore(todoElement, existingTodos[position]);
    }
    const rmButtons = document.querySelectorAll(".remove-todo");
    rmButtons.forEach(item => item.addEventListener('click', event => {
            const containerDiv = event.target.parentElement;
            containerDiv.remove();
        }
    ));*/
}
// Assuming you have a form element with id="myForm"
const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission and page reload behavior
    // Your form submission handling code here
});

