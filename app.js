let addButton = document.getElementById('btn');
let toDoContainer = document.getElementById('todocontainer');
let inputField = document.getElementById('inputfield');
let msg = document.getElementById('msg');
todos = [];

//   Prima idee de cod
//   addButton.addEventListener('click', function(){
//     let paragraph = document.createElement('p')
//     paragraph.classList.add('paragraph-styling')
//     paragraph.innerText = inputField.value;
//     toDoContainer.appendChild(paragraph);
//     inputField.value = '';
//     paragraph.addEventListener('click', function(){
//         paragraph.style.textDecoration = 'line-through';
//     })
//     paragraph.addEventListener('dblclick', function(){
//         toDoContainer.removeChild(paragraph);
//     })

//     if (inputField.value === '') {
//         msg.innerText = 'Please, enter something here!';
//           setTimeout(() => msg.remove(), 3000);  
//           }
//   })

if (localStorage.getItem('todoList'))
    localStorage.getItem('todoList')
        .split(',')
        .forEach(todo => {
            addParagraph(todo)
        });


// A doua idee de cod
addButton.addEventListener('click', function () {


    if (inputField.value === '') {
        msg.innerText = 'Please, enter something here!';
        setTimeout(() => msg.innerText = '', 3000);
    } else addParagraph(inputField.value)


});

function addParagraph(text) {
    let paragraph = document.createElement('p');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';


    paragraph.classList.add('paragraph-styling');

    paragraph.innerText = text;

    todos.push(paragraph.innerText);
    localStorage.setItem("todoList", todos);

    paragraph.prepend(checkbox); // Adăugăm checkbox-ul înaintea textului paragrafului
    paragraph.appendChild(deleteButton);
    toDoContainer.appendChild(paragraph);
    inputField.value = '';

    applyStylingsOnButton(deleteButton);


    paragraph.addEventListener('click', function () {
        if (checkbox.checked) {
            paragraph.style.textDecoration = 'line-through';
        } else {
            paragraph.style.textDecoration = 'none';
        }
    });


    deleteButton.addEventListener('click', function () {
        toDoContainer.removeChild(paragraph);
        index = todos.indexOf(text)
        console.log(text)
        todos = todos.filter(todo => todo !== text);

        localStorage.setItem('todoList', todos)
    });

}

function applyStylingsOnButton(deleteButton) {
    deleteButton.style.backgroundColor = '#f44336';
    deleteButton.style.color = '#ffffff';
    deleteButton.style.border = 'none';
    deleteButton.style.padding = '8px 10px';
    deleteButton.style.marginBottom = '5px';
    deleteButton.style.borderRadius = '5px';
    deleteButton.style.fontSize = '14px';
    deleteButton.style.cursor = 'pointer';
    deleteButton.style.display = 'flex';
    deleteButton.style.fontFamily = 'Alkatra';
    deleteButton.style.position = 'absolute';
    deleteButton.style.right = '0';
}
