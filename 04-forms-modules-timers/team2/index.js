const tasks = [];
const comments = document.createElement("p");
comments.innerText = "wpisz cokolwiek";
comments.style.color = "red";
comments.style.display = "none";
const form = document.querySelector("form");
form.append(comments);
const ul = document.querySelector("ul");


let btn = document.getElementById("todo-submit-button");

function addTask(value) {
  const id = Math.random();
  tasks.push({ id: id, value: value });
  console.log(tasks);
  const stringTasks = JSON.stringify(tasks);
  localStorage.setItem("stringTasks", stringTasks);
  addToList(id, value)
}

function callbackFunction(event) {
  event.preventDefault();

  const input = document.querySelector("input");

  if (input.value === "") {
    comments.style.display = "block";
    return false;
  }
  setTimeout(function () {
    addTask(input.value);
    input.value = ""
  }, 2000);


}

function loadList(){
    const stringTasks = localStorage.getItem('stringTasks')
    const stringTasksTable = JSON.parse(stringTasks)
    stringTasksTable.forEach(element => {
        console.log(element)
        addToList(element.id, element.value)
        tasks.push({id: element.id, value: element.value})
    })
}
    
function addToList(id, value) {
    const li = document.createElement("li");
  li.setAttribute("ID", id);
  li.innerText = value;
  ul.append(li);
        
}

function removeFromList(event){
    console.log(event.target)
    if(event.target.matches ('li')) {
        const id = event.target.id
        console.log(id)
        event.target.remove()
    }
}
    ul.addEventListener('click' , removeFromList)

loadList()
btn.addEventListener("click", callbackFunction);
