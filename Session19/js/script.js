// Elms
let divEl = document.querySelector("#todos");
let loadingEl = document.querySelector("#loading");
let errEl = document.querySelector("#err");

// request Url
let todosUrl = "https://jsonplaceholder.typicode.com/todos";

// request Function
function fetchTodos() {
  fetch(todosUrl)
    .then((res) => res.json())
    .then((data) => dispalyTodos(data))
    .catch(() => handleErr());
}

function handleErr() {
  loadingEl.innerHTML = "";
  errEl.innerHTML = "Something went wrong!";
}

function dispalyTodos(todos) {
  loadingEl.innerHTML = "";
  for (var i = 0; i < todos.length; i++) {
    divEl.innerHTML += `
      <h2> ${todos[i].title} </h2>
    `;
  }
}

fetchTodos();
