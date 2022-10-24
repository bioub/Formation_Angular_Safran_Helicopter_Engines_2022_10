import { fetchTodos } from "./api";
import { createTodoItem } from "./todos";

const formEl = document.querySelector('.todos-form') as HTMLFormElement;
const inputEl = document.querySelector('.todos-form-input') as HTMLInputElement;
const listEl = document.querySelector('.todos-list') as HTMLDivElement;
const toggleEl = document.querySelector('.todos-form-toggle') as HTMLInputElement;

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = inputEl.value;

  const itemEl = createTodoItem({
    id: Math.random(),
    title: value,
    completed: false
  });

  listEl.append(itemEl);

  inputEl.value = '';
});

toggleEl.addEventListener('click', () => {
  const checkboxes = listEl.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');

  for (const checkbox of checkboxes) {
    checkbox.checked = toggleEl.checked;
  }
});

listEl.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;

  if (target.classList.contains('todos-delete')) {
    target.closest('.todos-item')!.remove();
  }
});


fetchTodos().then((todos) => {
  for (const todo of todos) {
    const itemEl = createTodoItem(todo);
    listEl.append(itemEl);
  }
})


inputEl.addEventListener('input', () => {
  localStorage.setItem('todo-input', inputEl.value);
});

const previousTodoInput = localStorage.getItem('todo-input');

if (previousTodoInput) {
  inputEl.value = previousTodoInput;
}
