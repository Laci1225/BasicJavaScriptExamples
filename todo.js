function addFields() {
    const todoText = document.querySelector("#todoText").value;
    const todoDate = document.querySelector("#todoDate").value;
    const todoField = document.querySelector(".todo-fields");

    const todoHtml =    `<div class="flexx">
                            <p class="inpText">${todoText}</p>
                            <p class="inpDate">${todoDate}</p>
                            <button class="remove-todo" >Remove</button>
                        </div>`;
    todoField.insertAdjacentHTML("afterbegin", todoHtml);


    const rmButtons = document.querySelectorAll(".remove-todo");
    rmButtons.forEach(item => item.addEventListener('click', event => {
            const containerDiv = event.target.parentElement;
            console.log(containerDiv);
            containerDiv.innerHTML = "";
        }
    ));
}



/*function removeField() {

    const containerDiv = event.target.parentElement;
    containerDiv.innerHTML = "";
}*/