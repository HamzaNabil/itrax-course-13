let searchInput = document.getElementById("search-input");
let searchButton = document.getElementById("search-btn");
let resultArea = document.querySelector(".result-area");
let resultItemBtn = document.querySelector(".result-item-btn");
let modalBox = document.querySelector(".modal-area");
let closeModalBtn = document.querySelector(".close-modal");
let info = document.getElementById("info");
let loading = document.getElementById("loading");

searchButton.addEventListener("click", getRecipes);
resultArea.addEventListener("click", getRecipeDetails);
closeModalBtn.addEventListener("click", closeModal);

// class Recipe {

// }
function getRecipes() {
  if (searchInput.value != "") {
    resultArea.innerHTML = "";
    loading.style.display = "block";
    searchInput.value = "";
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput.value}`;
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        drawRecipesHtml(data);
      })
      .catch(function (err) {
        console.log(err);
      });
  } else {
    alert("Please Fill Search Term");
  }
}

function drawRecipesHtml(recipes) {
  loading.style.display = "none";
  if (recipes.meals) {
    recipes.meals.forEach(function (item) {
      resultArea.innerHTML += `
        <div class="result-item" data-id="${item.idMeal}">
          <img src="${item.strMealThumb}" alt="" />
          <h2>${item.strMeal}</h2>
          <a class="result-item-btn"> get Details </a>
        </div>
      `;
    });
  } else {
    resultArea.innerHTML = "no Data";
  }
}

function getRecipeDetails(e) {
  if (e.target.classList.contains("result-item-btn")) {
    info.innerHTML = "";
    let id = e.target.parentElement.getAttribute("data-id");
    let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        drawModalInfo(data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  // if(e.target.classList)
}

function drawModalInfo(data) {
  modalBox.style.display = "block";
  let meal = data.meals[0];
  info.innerHTML = `
    <h2>${meal.strMeal}</h2>
    <img src="${meal.strMealThumb}" alt="" />
    <p>${meal.strInstructions}</p>
    <a href="${meal.strYoutube}"> Youtube </a>
  `;
}

function closeModal() {
  modalBox.style.display = "none";
}

// ForEach - map - filter - find => Array Methods
// foreach
// [{id:1} , {id:2}, {id: 3}]
let arr = [1, 5, 5, 60, 70];

let result = arr.filter(function (item) {
  return item == 5;
});

console.log(result);

let result2 = arr.find(function (item) {
  return item == 5;
});
console.log(result2);

// let x = arr.forEach(function (item) {
//   return item;
// });

// console.log(x);

// let arr2 = arr.map(function (item) {
//   return item * 2;
// });
// console.log(arr2);

//
console.log(window.location.href.split("?")[1].split("=")[1]);
// ["file", "i=50"][1].split("=") // ['i', '50'] [1]

// document | window

// JS => Ecommerce App CRUD =

// PORC
