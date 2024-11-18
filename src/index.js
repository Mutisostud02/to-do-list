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
const description = document.querySelector('#description')
const dueDate = document.querySelector('#dueDate')
const priority = document.getElementsByName('priority');
const notes = document.querySelector('#notes')
const submit = document.querySelector('#submit');
submit.addEventListener('click', (e) => {
    console.log('Submitted');
    const createToDo = ToDoList();
    createToDo.title = title.value;
    createToDo.description = description.value;
    createToDo.dueDate = dueDate.value;
    createToDo.notes = notes.value;
    addToDo(createToDo, defaultPro);
    title.value = "";
    description.value = "";
    dueDate.value = "";
    notes.value = "";
    doc.classList.toggle('form');
    e.preventDefault();
  
})

console.log(defaultPro);

