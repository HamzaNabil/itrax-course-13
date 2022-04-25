// Array with Objects

var persons = [
  {
    id: 1,
    name: "Ahmed",
    age: 20,
    weight: "80kg",
    firends: ["tarek", "omar", "mahmoud"],
    work: {
      name: "City Starts",
      places: ["wef", "wefwe", "reger"],
    },
  },
  {
    id: 2,
    name: "Yasser",
    age: 25,
    weight: "60kg",
    firends: ["ahmed", "hossam", "fady"],
  },
  {
    id: 3,
    name: "Mohamed",
    age: 23,
    weight: "35kg",
    firends: ["ibrahim", "Tawfiq", "ahmed"],
  },
];

// Find index

// var i = persons.findIndex(function (person) {
//   return person.id == 2;
// });

// console.log(i);

// persons.splice(i, 1);

// console.log(persons);

// String Methods

var str1 = "Hello World "; // array of charaters
var str2 = "Test";

var firstName = "Hamza";
var lstName = " Nabil";

// Search
// MoHamed => mohamed
// Mohamed   mohamed
// console.log(str.toLowerCase());

// console.log(firstName.concat(lstName));

var s = "Hello"; // Hello
var a = s.split(""); // ["H", "e", "l", "l", "o"]
var s1 = a.reverse(); // ["o", "l", "l", "e", "H"]
// olleh
console.log(s1.join(""));

// Convert String to Array
// split
// Convet Array To String
// join
