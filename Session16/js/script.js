// var myImg = document.querySelector("img");
// var imgs = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg"];

// // SetTimeout
// var i = 0;
// function slidehshow() {
//   myImg.setAttribute("src", imgs[i]); //
//   i++; // 1

//   if (i == imgs.length) {
//     i = 0;
//   }

//   setTimeout(function () {
//     slidehshow();
//   }, 2000);
// }

// slidehshow();

// Palindrome

// function palindrome(str) {
//   // Convert str to LowerCase and trim
//   var newStr = str.toLowerCase().trim(); // RaR => rar
//   // convert string to array
//   var word = newStr.split(""); // ["r","a","r"]
//   // reverse array
//   var reversedWord = word.reverse(); // ["r","a","r"] // rar
//   // convert array to str
//   var txt = reversedWord.join(""); //rar

//   // Abbrevation
//   //   var newStr = str.toLowerCase().trim();
//   //   var txt = newStr.split("").reverse().join("");

//   if (txt == newStr) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// // Rar = rar
// // rar  == rar
// // radar == radar
// // Hello != olleH
// // test != Tset
// palindrome("rar "); // true
// palindrome(" Rar"); // true
// palindrome("radar"); // true
// palindrome("Hello"); // false
// palindrome("test"); // false

// Array of User objects
var users = [
  { id: 1, name: "Ahmed", age: 23 },
  { id: 2, name: "Mohamed", age: 25 },
  { id: 3, name: "Yasser", age: 27 },
  { id: 4, name: "Tarek", age: 29 },
  { id: 5, name: "Ahmed", age: 29 },
  { id: 6, name: "Tarek Ahmed", age: 29 },
];

var nameInput = document.querySelector("#username");
var ageInput = document.querySelector("#userage");
var btn = document.querySelector("button");
var list = document.querySelector("#usersList");
var searchUserInput = document.querySelector("#searchUser");
var searchBtn = document.querySelector("#searchBtn");

btn.onclick = addUser;
searchBtn.onclick = searchUser;

function addUser() {
  var nameValue = nameInput.value;
  var ageValue = +ageInput.value; // "30" => 30
  // id = Math.floor(Math.random() * 1000000)
  users.push({ id: users.length + 1, name: nameValue, age: ageValue });

  listUsers(users);
}
// Filter
// Find
// FindIndex
function searchUser() {
  var searchValue = searchUserInput.value; // ahmed
  var filteredUsers = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].name.toLowerCase().includes(searchValue.toLowerCase())) {
      filteredUsers.push(users[i]);
    }
  }
  listUsers(filteredUsers);
  // users
}

function listUsers(items) {
  list.innerHTML = "";
  for (var i = 0; i < items.length; i++) {
    list.innerHTML +=
      "<li>" +
      items[i].name +
      " " +
      items[i].age +
      " <button onclick='deleteUser(" +
      items[i].id +
      ")' > Delete </button> </li>";
  }
}
// ``
//  "<li class="kefjkefj( '"+ afefef+ " ' )'>"

listUsers(users);

function deleteUser(id) {
  users.splice(id - 1, 1);
  listUsers(users);
}
