// // Let | Var | Const =< Hoisting

// // Arrow Function

// // function code(x) {
// //   console.log("Code");
// // }

// // let code = (x) => {
// //   console.log("code", x);
// // };

// // code(1);

// // Spread Operator ... arr | obj

// let nums = [1, 5, 7, 9, 5, 5, "wefwefwe", {}];
// // ...nums = nums[0], nums[1], nums[2], nums[3] , nums[..]
// let new_nums = [...nums];

// // console.log(new_nums);

// let obj = {
//   name: "efegfeg",
//   age: 10,
// };

// let new_obj = {
//   ...obj,
// };

// // console.log(new_obj);

// // Default Parameters
// function print(x = 10, y = 20, z = 30) {
//   console.log(x, y, z);
// }

// // print(1, 2, 3); // 1 2 3
// // print(1, 2); // 1  2  30
// // print(1); // 1 20 30
// // print(); // 10 20 30

// // function hamada() {
// //     wegfwefwefwef
// // }

// // hamada();

// // Destruction

// let person = {
//   name: "mohamed",
//   age: 20,
//   weight: "70kg",
// };

// // let name = person.name;
// // let age = person.age;
// // let weight = person.weight;
// let { age } = person;

// let all = [5, 20, 90];

// let [y] = all;

// console.log(y);

// // Template String

// // div.innerHTML = "<li>" + x +"</li>"
// // div.innerHTML = ` <li> ${x} </li>`
// let x = "Hamada";

// console.log(` ${x} Mohamed `);

// // `
// //     <div>
// //         <h1> ${x} </h1>
// //     </div>
// // `

// // "<div>" +

// // "<h1>" + x + "</h1>"+

// // "</div>"
let myDiv = document.getElementById("app");
let products = [
  { id: 1, title: "labtop", price: 1000 },
  { id: 2, title: "mouse", price: 200 },
  { id: 3, title: "pc", price: 7000 },
];

let listProducts = () => {
  for (var i = 0; i < products.length; i++) {
    let { title, price } = products[i];
    myDiv.innerHTML += `
        <div class="box">
            <h2> ${title} </h2>
            <span> ${price} </span>
        </div>
    `;
  }
};

listProducts();

// let myInput = document.querySelector("input");

// myInput.addEventListener("keyup", search);

// function search(event) {
//   console.log(event.target.value);
// }

let mySelect = document.querySelector("#select");

mySelect.addEventListener("change", filterData);

function filterData() {
  if (mySelect.value == "") {
    console.log(products);
  } else {
    for (var i = 0; i < products.length; i++) {
      if (products[i].price == mySelect.value) {
        console.log(products[i]);
      }
    }
  }
}
// How to create pagination using js
// products [100products]
// 10 products per page
// 100 / 10 = 10 pages
