const button1 = document.getElementById("todo-submit-button");
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-id");
const ul = document.getElementById("todos-list");
const h1 = document.createElement("h1");
const toDo = [];

form.addEventListener("submit", addToDo);

function addToDo(event) {
  event.preventDefault();
  validateToDo();
  console.log("submit");
}

function validateToDo() {
  const currentInputValue = input.value;
  if (currentInputValue === "") {
    inputEmpty();
  } else {
    h1.remove();
    input.style.border = "1px solid black";
    addNewToDo(currentInputValue);

    setTimeout(domUpdate, 2000);
  }
}

function inputEmpty() {
  input.style.border = "1px solid red";
  h1.innerText = "Uzupełnij wszystkie pola";
  h1.style.color = "red";
  form.append(h1);
}

function addNewToDo(currentInputValue) {
  const id = Math.random();
  toDo.push({ currentInputValue, id });
}

function domUpdate() {
  ul.textContent = "";
  toDo.forEach((element) => {
    const h2 = document.createElement("h2");
    h2.innerText = element.currentInputValue;
    h2.setAttribute("id", element.id);
    h2.style.color = "blue";
    ul.appendChild(h2);
  });
}
