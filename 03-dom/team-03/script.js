console.log("DOM API");

const capturedHeader = document.getElementById("header");

console.log(capturedHeader);

// zad.3

capturedHeader.classList.add("header");

capturedHeader.innerText = "Jestem nagłówkiem";

const body = document.querySelector("body");

// zad.4

const tablica = ["a", "b", "c", "d"];

const list = document.createElement("ol");

function callback(el) {
  const li = document.createElement("li");

  li.innerText = el;
  list.appendChild(li);
}

tablica.forEach(callback);

body.appendChild(list);

// zad.5
const catchLi = document.querySelectorAll("li");

function addClass(li) {
  li.classList.add("listItem");
}

catchLi.forEach(addClass);

// catchLi.forEach(function(li){li.classList.add("listItem")});

// catchLi.forEach((li) => li.classList.add("listItem")); - ZAPIS ES6

// zad6.
capturedHeader.classList.remove("header");

capturedHeader.remove();

const button = document.createElement("button");

button.innerText = "Kliknij";

body.appendChild(button);

const color = body.style.backgroundColor;

button.addEventListener("click", function (event) {
  //   console.log(body.style.backgroundColor);
  //   if (body.style.backgroundColor === "rgb(18, 49, 35)") {
  //     body.style.backgroundColor = color;
  //   } else {
  //     body.style.backgroundColor = "rgb(18, 49, 35)";
  //   }
  body.classList.toggle("toggle");
});
