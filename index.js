
    var todoForm = document.getElementById('form');
    var todoInput = document.getElementById('input');
    var todoList = document.getElementById('list');

    todoForm.addEventListener('submit', function() {
        if (todoInput.value.trim() === '') return;
        addTodo(todoInput.value);
        todoInput.value = '';
    });

    function addTodo(text) {
        const li = document.createElement('li');
        li.textContent = text;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(li);
        });
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
   

