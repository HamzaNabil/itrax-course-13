// https://api.github.com/users/HamzaNabil/repos

let inputEl = document.querySelector("#username");
let btn = document.querySelector("#btn");
let divEl = document.querySelector("#repos");
btn.addEventListener("click", getRepos);

function getRepos() {
  let username = inputEl.value;
  let reposUrl = `https://api.github.com/users/${username}/repos`;

  fetch(reposUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      dispalyRepos(data);
    })
    .catch();
}

function dispalyRepos(repos) {
  for (var i = 0; i < repos.length; i++) {
    divEl.innerHTML += `
        <h2> ${repos[i].name} </h2>
        <a href="${repos[i].clone_url}"> Url </a>
      `;
  }
}
