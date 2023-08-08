let id = 0;

function addFields() {
    const todoText = document.querySelector("#todoText").value;
    const todoDate = document.querySelector("#todoDate").value;
    const todoField = document.createElement("div");
    todoField.classList.add("flexx");
    todoField.innerHTML = `<div class="inpText" data-id="${id++}">${todoText}</div>
                            <div class="inpDate">${todoDate}</div>
                            <button class="remove-todo" >Remove</button>`;
    insertTodoInOrder(todoField);
}

let todoArray = [];

function insertTodoInOrder(todoElement) {
    //todoArray = JSON.parse(localStorage.getItem("items")) || [];
    //console.log(todoArray[0]);
    //todo "??"

    todoArray.push(todoElement);
    todoArray.sort((a, b) => {
        return new Date(a.querySelector('.inpDate').innerText).getTime() - new Date(b.querySelector('.inpDate').innerText).getTime();
    });

    const todoField = document.querySelector('.todo-fields');

    todoArray.length === 0 && todoField.appendChild(todoElement);

    for (let i = 0; i < todoArray.length; i++) {
        todoField.appendChild(todoArray[i]);
    }
    //console.log(todoArray);
    //localStorage.setItem("items", JSON.stringify(todoArray));
    //console.log(localStorage.getItem("items"));


    const rmButtons = document.querySelectorAll(".remove-todo");

    rmButtons.forEach(item => item.addEventListener('click', event => {
        const containerDiv = event.target.parentElement;
        for (let i = 0; i < todoArray.length; i++) {
            if (todoArray[i].getAttribute("data-id") === containerDiv.getAttribute("data-id")) {
                todoArray.splice(i, 1);
                break;
            }
        }
        containerDiv.remove();
    }));
    console.log(todoArray)
}