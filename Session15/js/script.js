// Function Definition

// function testCode() {
//   document.getElementById("demo").innerHTML = "Test Code";
// }

// testCode();

// Expression Function
// var testCode = function () {
//   console.log("Test");
// };

// testCode();

// function return value
// return value from function replace with calling
// function sumTwoNumbers(x, y) {
//   return x + y;
// }

// var result = sumTwoNumbers(1, 2);
// console.log(result);

// Looping
// Start Point [Initalization] 1
// End Point [Condition] 10
// Step Point [update] + 1

// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

// While Loop
// var x = 10;
// while (x >= 1) {
//   console.log(x);
//   x--;
// }

// var x = 1;
// while (x > 2) {
//   console.log(x);
//   x++;
// }

// do While
// var t = 1;
// do {
//   console.log(t); // 1
//   t++; // 2
// } while (t > 5);

// i = 1 | 1 <= 10 | console.log(i); // 1
// i = 2 | 2 <= 10 | console.log(i); // 2
// i = 3 | 3 <= 10 | console.log(i); // 3
// i = 4 | 4 <= 10 | console.log(i); // 4
// i = 5 | 5 <= 10 | console.log(i); // 5
// i = 10| 10<= 10 | console.log(i); // 10
// i = 11| 11<= 10

// id => getElementById
// class|id|ele => querySelector

// document.getElementById("demo");
// document.querySelector("div");
//
// var data = document.getElementsByClassName("test");
// console.log(data);
// dom Selectors
// document.querySelectorAll(".test");

// Array

var arr = [200, 500, "Ahmed", 600, "Mohamed", 700];
// index    0    1     2       3       4      5
// number   1    2     3       4       5      6

// // get the last element into arr
// // arr[arr.length - 1]

// console.log(arr[4]);

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);

// console.log(arr.length); // 5

// var persons = ["ahmed", "mohamed", "yasser"];
// persons.length // 3
// persons[persons.length - 1]

// var items = [
//   5,
//   function () {
//     console.log("code");
//   },
//   "Tarek",
//   true,
//   [8, 9, 10],
//   "Hamada",
// ];

// items[1]();

// console.log(items[4][1]);

// console.log([1, "test", 0][1]);
// =>  test

// var selectors = document.getElementsByClassName("test"); // [div, p]

// console.log(selectors[1].innerHTML);

// // Set
// document.querySelector('.test').innerHTML = "wefwefew"
// // Get
// document.querySelector('.test').innerHTML;

// Create Birthday years
var selectEle = document.querySelector("select");

// 1995 => 2022

for (var i = 1995; i <= 2022; i++) {
  selectEle.innerHTML += "<option>" + i + "</option>";
}
