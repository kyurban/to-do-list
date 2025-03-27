var input = document.querySelector('.task-input');
var button = document.querySelector('#add-button');
var ul = document.querySelector('#items');
var taskCount = 0;

button.addEventListener('click', addItem);

function addItem(e) {
    if (input.value === '') {
        alert('Please enter a task');
    } else {
        taskCount++;
        var inputValue = input.value;
        var li = document.createElement('li');
        li.classList.add('item');
        //create input
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'task' + taskCount;
        checkbox.addEventListener('click', checkItem, false);
        li.appendChild(checkbox);
        //create label
        var label = document.createElement('label');
        label.htmlFor = 'task' + taskCount;
        label.textContent = inputValue;
        li.appendChild(label);
        //create button
        var deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = '\u00d7';
        deleteButton.addEventListener('click', deleteItem);
        li.appendChild(deleteButton);
    
        ul.appendChild(li);
    
        input.value = '';
        saveData();
    }
}

function deleteItem(e) {
    e.target.parentElement.remove();
    saveData();
}

function checkItem(e) {
    e.target.classList.toggle('checked');
    saveData();
}

function saveData() {
    localStorage.setItem('items', ul.innerHTML);
}

function showTask() {
    taskCount = document.querySelectorAll('.delete').length + 1;

    ul.innerHTML = localStorage.getItem('items');

    var deleteButtons = document.querySelectorAll('.delete');
    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', deleteItem);
    }

    var checkboxes = document.querySelectorAll('.item input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('click', checkItem, false);
    }
}

showTask();


