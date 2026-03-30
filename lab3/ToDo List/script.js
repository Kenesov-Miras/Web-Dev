"use strict";

const formEl = document.getElementById("todoForm");
const inputEl = document.getElementById("todoInput");
const listEl = document.getElementById("todoList");
const showCompletedBtn = document.getElementById("showCompletedBtn");

let isFiltered = false;

function applyFilter() {
  const items = listEl.querySelectorAll(".todo-item");

  items.forEach((item) => {
    const checkbox = item.querySelector(".todo-checkbox");

    if (isFiltered) {
      item.style.display = checkbox.checked ? "flex" : "none";
    } else {
      item.style.display = "flex";
    }
  });
}

function createTodoItem(text) {
  const liEl = document.createElement("li");
  liEl.className = "todo-item";

  const checkboxEl = document.createElement("input");
  checkboxEl.type = "checkbox";
  checkboxEl.className = "todo-checkbox";

  const textEl = document.createElement("span");
  textEl.className = "todo-text";
  textEl.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "todo-delete";
  deleteBtn.textContent = "Delete";

  checkboxEl.addEventListener("change", () => {
    liEl.classList.toggle("is-done", checkboxEl.checked);
    applyFilter();
  });

  deleteBtn.addEventListener("click", () => {
    listEl.removeChild(liEl);
  });

  liEl.appendChild(checkboxEl);
  liEl.appendChild(textEl);
  liEl.appendChild(deleteBtn);

  return liEl;
}

function addTodo() {
  const value = inputEl.value.trim();
  if (!value) return;

  const itemEl = createTodoItem(value);
  listEl.appendChild(itemEl);

  inputEl.value = "";
  inputEl.focus();
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});

showCompletedBtn.addEventListener("click", () => {
  isFiltered = !isFiltered;

  showCompletedBtn.textContent = isFiltered
    ? "Show All"
    : "Show Completed";

  applyFilter();
});
