// var num = 5;
// var test = 10;

// Arthematic Operator
// + - / * % ++ --

// Assignment Operator
// = += -= *= /= %=
// <div> hamada </div>
// document.getElementById('demo').innerHTML += "hamada";

// // x += "hamada"

// DATA TYPES
// var x = 5; // number
// var s = "test"; // string
// var b = false; // boolean
// var a = [1, 2, 3, 4]; // object(array)
// var o = {
//   // object
//   name: "test",
// };

// IF Condition

// check if MyName = Ahmed => Yes
// check if myName = Yasser => Ok
// else => No

// if  else if  else
// var myName = "Ahmed";

// if (myName == "Ahmed") {
//   console.log("YES");
// } else if (myName == "Yasser") {
//   console.log("OK");
// } else {
//   console.log("NO");
// }

// Conidtional Operatror > < >= <= !=

// var z = 10;

// if(z != 10 ) {

// }
// if (z == 10) {
// } else if (z == 5) {
// } else if (z == 2) {
// } else {
// }

// var z = 500;
// // Switch
// switch (z) {
//   case 10:
//     console.log("10");
//     break;

//   case 5:
//     console.log("5");
//     break;

//   case 2:
//     console.log("2");
//     break;

//   default:
//     console.log("no");
// }

// logical Operator  && || !

// var x = 1;
// var y = 2;
// // و => && => all condition must be true
// // أو => || => at least one condition must be true
// if (x == 3 || y == 3) {
//   console.log("ay 7agaa");
// }

// var t = false;

// var n = 100
// if(n)
// anything in if => ture except 0
// if (t) {
//   console.log("ttttt");
// } else {
//   console.log("nnnnn");
// }
// // 0
// if (0) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// var x = true;
// var n = 10

// if(n) {

// }

// Function الوظيفه
// define function
function code() {
  console.log(2);
  console.log(3);
}
// call function
// code();
// code();

// console.log(2);
// console.log(3);

// console.log(2);
// console.log(3);

// Write function that sum 2 number

// function sum(a, b) {
//   if (typeof a == "number" && typeof b == "number") {
//     console.log(a + b);
//   } else {
//     console.log("Not able to sum Strings");
//   }
// }

// function with parameters[variables]
// sum(5, 6); // 11
// sum(10, 50); // 60
// sum(2, 9);
// sum("ahmed", "yasser");
// sum("ahmed", 5);

// / simple Task
var userInput = document.getElementById("user");
var ageInput = document.getElementById("age");
var btn = document.getElementById("btn");
var ulList = document.getElementById("ulList");
var pElm = document.getElementById("data");

// " " != "";
// if user enter space remove it
// if age not accept negative number
// maxLength 10 || age > 100
// btn.onclick = function () {
//   addUsername();
// };

btn.onclick = addUsername;

// function
function addUsername() {
  pElm.style.display = "none";

  if (userInput.value.length > 10) {
    alert("user must be 10 characters");
    return;
  }

  if (ageInput.value > 100) {
    alert("user age must be less than 100");
    return;
  }
  if (ageInput.value.includes("-")) {
    alert("number must be positive");
  }
  if (userInput.value.trim() != "" && ageInput.value.trim() != "") {
    ulList.innerHTML +=
      "<li>" + userInput.value + ", " + ageInput.value + "</li>";

    userInput.value = "";
    ageInput.value = "";
  } else {
    // alert("Please Fill Data!");
    pElm.style.display = "block";
  }
}
