import { save } from "./storage-js.js";

const button = document.getElementById("todo-submit-button")
const input = document.getElementsByName("todo-input") [0]
const body = document.querySelector("body");
const unorderedList = document.querySelector("ul");
const form = document.getElementById("todo-form")
const paragraph = document.createElement("p")



console.log(button)

function isBlank () {
    if (input.value){
        return false
        
    }
    else {
        return true
    }

}

function addElement() {
     // console.log("działa")
     setTimeout(function () {const liElement = document.createElement("li");
     liElement.innerText = input.value;
     unorderedList.appendChild(liElement);
     save(input.value)
     clear()}, 2000)
     
}

function fillIn() {
    paragraph.innerText = "Uzupełnij"
    paragraph.style.color = "red"
    form.appendChild(paragraph)
}

function clear() {
    input.value = ""
    paragraph.innerText = ""
}

const addTask = function (event) {
    event.preventDefault()
console.log(input)
    if (isBlank() == false){
        addElement()
       
    }
    else {
       console.log("Uzupełnij wartość")
       fillIn()
    }
}


button.addEventListener("click", addTask)