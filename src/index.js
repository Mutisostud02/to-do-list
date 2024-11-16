import "./styles.css";
import { createToDo } from "./todo";
console.log('Hello, we on')
console.log(createToDo.priority)
const doc = document.querySelector('form');

const addBtn = document.querySelector('.addProj');
addBtn.addEventListener('click', () => {
    console.log('Clicked')
    doc.classList.toggle('form');
})
console.log(addBtn)
