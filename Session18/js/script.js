//

// function test() {
//   return {
//     x: 1,
//     y: 2,
//     z: 3,
//   };
// }

// let obj = test();

// console.log(o);

// let xhttp = {
//     onload: '',
//     open: '',
//     send: '',
//     responseText: ''
// }

// function return obj {wwefwe}
// let xhttp = new XMLHttpRequest();
// //
// xhttp.onload = function () {
//   console.log(JSON.parse(xhttp.responseText)); // [{},{},{}]
//   // for() {}
// };

// xhttp.open("GET", "https://jsonplaceholder.typicode.com/users");
// xhttp.send(); // send request to get users

// let o = {
//   name: "ewfwef",
//   age: "wefwegf",
// };

// console.log([{}, {}, {}]);
// console.log("[{} , {} ,{}]");

// convert string to array
// console.log(JSON.parse([{} , {} ,{}]));

// Promises [Resolve - Reject ]

// Fetch

//

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(function (test) {
//     test
//       .json()
//       .then(function (data) {
//         console.log(data);
//       })
//       .catch();
//   }) // resolve

//   .catch(function () {}); // reject

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        console.log(data[i].email);
      }
    })
    .catch((err) => {
      //   document.getElementById("").innerHTML = "Somehting "
    });
}

// fetchUsers();

// let p = {
//   x: 1,
//   f: 2,
//   json: function () {
//     console.log("wefwefwef");
//   },
// };

// p.z()

// demo
// .then()
// .catch()

// hamada
// .then()
// .catch()

// function code(c) {
//   // c = Hamada
//   // c = Test 1
//   // c = []
//   // c = function () {}
//   c();
// }

// code("Hamada");
// code("Test 1");

// code([]);

// code(function () {
//   console.log("aiosfhlwehgioewh");
// });

// // Callback Function

// function print(cb) {
//   console.log("wefwefew");
//   cb();
// }

// print(function () {
//   console.log("test");
// });
