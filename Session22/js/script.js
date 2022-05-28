// Prototype = object [ parent ]

// function Car(name) {
//   this.name = name;
// }

// Car.prototype.printData = function () {
//   console.log("this is car");
// };

// let byd = new Car("byd");
// console.log(byd);
// let hundy = new Car("hundy");
// console.log(hundy);

// Example : Bank

// function => Class

// function Bank(balance) {
//   this.balance = balance;

//   this.setBalance = function (vl) {
//     this.balance = vl;
//   };

//   this.getBalance = function () {
//     console.log("real balance", this.balance);
//   };

//   // Deposit
//   this.deposit = function (vl) {
//     if (vl <= 0 || typeof vl != "number") {
//       console.log("value must be positive number");
//     } else {
//       let newBalance = this.balance + vl;
//       this.setBalance(newBalance);
//     }
//   };

//   // withdraw
//   this.withdraw = function (vl) {
//     let newBalance = this.balance - vl;
//     if (newBalance < 0) {
//       console.log("not enough money!!");
//     } else {
//       this.setBalance(newBalance);
//     }
//   };
// }

// let b = new Bank(0);
// b.setBalance(1000);
// b.deposit(250);
// b.getBalance(); // 0

// Game
// class Charater{

// }
// class X {
//   constructor() {
//     let x = 5;
//   }
//   status() {}
// }

function Charater(name, strength, hitpoints) {
  this.name = name;
  this.strength = strength;
  this.hitpoints = hitpoints;
}

Charater.prototype.status = function () {
  console.log(
    `Name: ${this.name} -- Strength: ${this.strength} -- Hitpoints: ${this.hitpoints}`
  );
};

Charater.prototype.attack = function (opponent) {
  if (opponent.hitpoints > 0) {
    opponent.hitpoints -= this.strength;
    console.log(`${this.name} attacked ${opponent.name}`);
  } else {
    console.log(`${this.name} is win`);
    console.log(`${opponent.name} is lose`);
  }
};

// Ahmed
let ahmed = new Charater("ahmed", 10, 100);

// Mohamed
let mohamed = new Charater("mohamed", 20, 100);

ahmed.attack(mohamed);
ahmed.attack(mohamed);
mohamed.attack(ahmed);
mohamed.attack(ahmed);
mohamed.attack(ahmed);
mohamed.attack(ahmed);
mohamed.attack(ahmed);
mohamed.attack(ahmed);

mohamed.status();
ahmed.status();

// class P {
//   constructor(x) {
//     this.x = x;
//     this.x.addEventListener("click", this.add);
//   }

//   add = () => {
//     console.log(this.x);
//   };
// }

// new P();
