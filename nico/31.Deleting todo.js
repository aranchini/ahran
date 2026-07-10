const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText= newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo =toDoInput.value;
    toDoInput.value="";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit",handleToDoSubmit);

/*<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Momentum</title>
  </head>
  <body>
    <h2 id="clock">00:00:00</h2>
    <form class="hidden" id="login-form">
      <input
        required
        maxlength="15"
        type="text"
        placeholder="이름이 뭐에요?"
      />
      <input type="submit" value="Log In" />
    </form>
    <h1 class="hidden" id="greeting"></h1>
    <form id="todo-form">
      <input type="text" placeholder="오늘 할일을 작성후 엔터를 눌러주세요!" required/>
    </form>
    <ul id="todo-list"></ul>
    <div id="quote">
      <span></span>
      <span></span>
    </div>
    <script src="clock.js"></script>
    <script src = "greetings.js"></script>
    <script src="27.Quotes.js"></script>
    <script src="28.background.js"></script>
    <script src="31.Deleting todo.js"></script>
  </body>
</html> */