var todoForm = document.getElementById('form');
var todoInput = document.getElementById('input');
var todoList = document.getElementById('list');

todoForm.addEventListener('submit', function(event) { 
    event.preventDefault();
    if (todoInput.value !== ''){
        addTodo(todoInput.value);
        todoInput.value = '';
    }
    else {
        alert('Please enter a task to be added!');
    }
});

function addTodo(text) {
    let li = document.createElement('li');
    li.textContent = text;
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(li);
    });
    li.appendChild(deleteButton);
    todoList.appendChild(li);
}
