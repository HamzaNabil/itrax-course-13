// - this
// context
// - function parameter with another function

console.log(this); // window

// defintion function
// function code() {
//   console.log(this); // window
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   console.log("hamada");
//   console.log(this);
// });

// let person = {
//   name: "Mohamed",
//   age: 25,

//   info: function () {
//     console.log(this.name, this.age);
//   },
// };

// person.info();

// this in global => window object
// this in defintion function => window object
// this in function fire when trigger event => this (ele)
// this in function in object => object

// - function parameter with another function

// function test(cb) {
//   // cb = 1
//   // cb = []
//   // cb = {}
//   // cb = function() {}

//   cb();
//   // console.log(cb);
// }

// test(function () {
//   console.log("run");
// });

// map(function() {})

// function return

// function printUser() {
//   return function () {
//     console.log("usr");
//   };
// }

// let r = printUser();

// printUser()(); // r()

// let username = "ahmed";

// let userage = 50;

// function printUserDetails() {
//   console.log(username, userage);
// }

// oop
// factory function
// function getUser(name, age) {
//   return {
//     name,
//     age,

//     printUserDetails: function () {
//       console.log(this.name, this.age);
//     },
//   };
// }

// let user1 = getUser("ahmed", 30);
// console.log(user1);

// let user2 = getUser("yasser", 50);
// console.log(user2);

// constructor function => function create and return object

// function createPerson() {
//   let p = {};
//   p.name = "ahmed";
//   p.age = 20;
//   p.weight = "80kg";
//   return p;
// }

// let p1 = createPerson();
// console.log(p1);

// function Person(name, age, weight) {
//   // let this = {}
//   this.name = name;
//   this.age = age;
//   this.weight = weight;
//   // return this;
// }

// let p = new Person("ahmed", 20, "80kg");
// console.log(p);

// let p1 = new Person("yasser", 30, "70kg");
// console.log(p1);

// let user = {
//   name: "ahmed",
//   age: 50,

//   printUserDetails: function () {
//     console.log(this.name, this.age);
//   },
// };

// let user2 = {
//   name: "mohamed",
//   age: 25,

//   printUserDetails: function () {
//     console.log(this.name, this.age);
//   },
// };

// let user3 = {
//   name: "mahmoud",
//   age: 30,

//   printUserDetails: function () {
//     console.log(this.name, this.age);
//   },
// };

// function userInfo(user) {
//   // user.name
//   user.name
// }

// userInfo({
//   name: "ahmed",
//   age: 20,
//   salary: "2000",
// });

// userInfo({});

function getFetch(url, cb) {
  //cb()
  fetch(url)
    .then((req) => req.json())
    .then((data) => cb(data))
    .catch((err) => console.log(err.message));

  // return
}

getFetch("https://jsonplaceholder.typicode.com/posts", function (data) {
  console.log(data);
});

getFetch("https://jsonplaceholder.typicode.com/todos", function (data) {
  console.log(data);
});

//
// getComments((data) => console.log(data));

// function cb(data) {
//   console.log(data);
// }

// function test() {
//   return "Wqdqd"
// }

// let x = test();
