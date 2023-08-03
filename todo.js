function addFields() {
    const todoText = document.querySelector("#todoText").value;
    const todoDate = document.querySelector("#todoDate").value;
    const todoField = document.createElement("div");
    todoField.classList.add("flexx");
    todoField.innerHTML = `<div class="inpText">${todoText}</div>
                            <div class="inpDate">${todoDate}</div>
                            <button class="remove-todo" >Remove</button>`;
    insertTodoInOrder(todoField);

}

function insertTodoInOrder(todoElement) {
    const todoDate = new Date(todoElement.querySelector('.inpDate').innerText).getTime();
    const existingTodos = document.querySelectorAll('.flexx');

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
    ));
}
