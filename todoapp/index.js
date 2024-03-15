let todoList =JSON.parse(localStorage.getItem('todoList'))||[];
displayItem();
let todoInput = document.querySelector('#todo-input');
let todoElement = document.querySelector('#todo-date');
function addTodo() {
    let todoItem = todoInput.value;
    let todoDate = todoElement.value;
    todoList.push({ item: todoItem, dueDate: todoDate });
    todoInput.value = "";
    todoElement.value = "";
    displayItem();
}

function displayItem() {
    let displayContainer = document.querySelector('#item-container');
    let newHtml = "";
    for (let i = 0; i < todoList.length; i++) {
        // let item = todoList[i].item;
        // let dueDate = todoList[i].dueDate;
        let{item,dueDate}=todoList[i];
        newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button onclick="todoList.splice(${i},1);displayItem()">Delet</button>
        `;
    }
    displayContainer.innerHTML = newHtml;
    localStorage.setItem("todoList",JSON.stringify(todoList));
}
