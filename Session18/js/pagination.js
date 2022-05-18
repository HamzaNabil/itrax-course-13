let products = [
  "Product1",
  "Product2",
  "Product3",
  "Product4",
  "Product5",
  "Product6",
  "Product7",
  "Product8",
  "Product9",
  "Product10",
  "Product11",
];

// Num of Product 10

let productsPerPage = 10;
let pages = Math.ceil(products.length / productsPerPage); // 9 / 2 = 4.5

// DOM ELms
let container = document.getElementById("data");
let paginationList = document.getElementById("pagination-list");

function createPaginationList() {
  for (var i = 1; i <= pages; i++) {
    paginationList.innerHTML += `
        <button onclick="displayProducts(${i})"> ${i} </button>
    `;
  }
}

createPaginationList();

function displayProducts(page) {
  let start = (page - 1) * productsPerPage; // 0
  let end = page * productsPerPage; // 3
  let productsToShowInPage = products.slice(start, end); // []
  container.innerHTML = "";
  for (var i = 0; i < productsToShowInPage.length; i++) {
    container.innerHTML += `<p> ${productsToShowInPage[i]} </p>`;
  }
}

displayProducts(1);
// displayProducts(2 ,)

// slice
// let data = ["List 1", "List 2", "List 3", "List 4", "List 5"];

// console.log(data.slice(2, 4));
