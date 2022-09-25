// task 0

console.log("DOM API");

// task 1

const header = document.getElementById("header");

console.log(header);

// task 2

header.classList.add("header");

// task 3

header.innerText = "Jestem nagłówkiem";

// task 4

const body = document.querySelector("body");

const listItems = ["a", "b", "c", "d"];

const list = document.createElement("ol");

listItems.forEach((listItem) => {
  const li = document.createElement("li");
  list.append(li);
  li.innerText = listItem;
});

body.append(list);

// task 5

const listElements = document.querySelectorAll("li");

listElements.forEach((listElements) => {
  listElements.classList.add("listItem");
});

// task 6

header.classList.remove("header");

// task 7

header.remove();

// task 8

function toggleBackgroundColor() {
  if (body.style.backgroundColor === "") {
    body.style.backgroundColor = "#123123";
  } else {
    body.style.backgroundColor = "";
  }
}

const button = document.createElement("button");
body.append(button);
button.innerText = "KLIKNIJ MNIE";

button.addEventListener("click", toggleBackgroundColor);

// task extra

const div = document.createElement("div");

const btnPlus = document.createElement("button");
btnPlus.innerText = "+";
const btnMinus = document.createElement("button");
btnMinus.innerText = "-";

let counter = document.createElement("p");
counter.innerText = "0";
body.append(counter);

body.append(div);
div.append(btnPlus, counter, btnMinus);

let counterValue = 0;

counter.before(btnPlus);
counter.after(btnMinus);

btnPlus.addEventListener("click", () => {
  counterValue++;
  counter.innerText = counterValue;
});

btnMinus.addEventListener("click", () => {
  counterValue--;
  counter.innerText = counterValue;
});

div.style.display = "flex";
