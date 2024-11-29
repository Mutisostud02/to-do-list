import "./styles.css";
import { ToDoList } from "./todo";
import { addToDo } from "./addTodo";
import { defaultPro } from "./todo";
const doc = document.querySelector('form');

const addBtn = document.querySelector('.addProj');

addBtn.addEventListener('click', () => {
    console.log('Clicked')
    doc.classList.toggle('form');
})

const title = document.querySelector('#title')
const dueDate = document.querySelector('#dueDate')
const proPriority = document.querySelectorAll('input[name="priority"]');
const priority = Array.from(proPriority);
const submit = document.querySelector('#submit');

submit.addEventListener('click', (e) => {
    const todoList = document.querySelector('.toDoList');
    let selectedPriority = null;
    priority.forEach(element => {
        if(element.checked) {
            selectedPriority = element.value;
        }
    });

    const createToDo = ToDoList();

    createToDo.title = title.value;
    createToDo.dueDate = dueDate.value;
    createToDo.priority = selectedPriority;

    addToDo(createToDo, defaultPro);

    const todoTitle = document.createElement('h3');
    todoTitle.textContent = `${createToDo.title}`;
    todoTitle.setAttribute('style', 'font-weight:700; color: rgb(36,148,223')

    const hr = document.createElement('hr');

    const todoDue = document.createElement('p');
    todoDue.textContent = `DUE : ${createToDo.dueDate}`;

    const todoPriority = document.createElement('p');
    todoPriority.textContent = `PRIORITY : ${createToDo.priority}`;

    let toDo = document.createElement('div');     
    toDo.classList.add('todoItems');
    toDo.appendChild(todoTitle);
    toDo.appendChild(hr);
    toDo.appendChild(todoDue);
    toDo.appendChild(todoPriority);
    todoList.appendChild(toDo);

    title.value = "";
    dueDate.value = "";

    doc.classList.toggle('form');

    
    e.preventDefault();
    
})

console.log(defaultPro);


