let car = {
  name: "BMW",
  model: 2020,

  move: function () {
    console.log("move");
  },
};

// function Car(name, model) {
//   this.name = name;
//   this.model = model;
//   this.move = function () {};
// }

// let car1 = new Car("byd", 2000);
// console.log(car1);

// Class
// class Car {
//   constructor(name, model) {
//     this.name = name;
//     this.model = model;
//     this.move = function () {};
//   }
// }
// class Car {
//   constructor(name, model) {
//     this.name = name;
//     this.model = model;
//   }
//   move() {}
// }

// let car1 = new Car("toyta", 2000);

// Encapsulation
// function Employee(name, phone, age) {

// }

// class Employee {
//   constructor(name, phone, age) {
//     this.name = name;
//     this.phone = phone;
//     this.age = age;
//   }
//   // setEmpInfo(name, phone, age) {
//   //   this.name = name;
//   //   this.phone = phone;
//   //   this.age = age;
//   // }

//   printEmpName() {
//     return this.name;
//   }
//   printPhone() {
//     console.log(this.phone);
//   }
//   printEmpInfo() {
//     console.log(this.name, this.phone, this.age);
//   }
// }

// // {name, age ,phone}

// let emp1 = new Employee();
// // emp1.setEmpInfo("Mohamed", "015454", 25);
// let empName = emp1.printEmpName();
// console.log(empName);

// let inputEl = document.querySelector("#inputEl");
// let btnEl = document.querySelector("#btn");

// btnEl.addEventListener("click", addTodo);

// function addTodo() {
//   console.log(inputEl.value);
// }

// class Todo {
//   constructor() {
//     this.inputEl = document.querySelector("#inputEl");
//     this.btnEl = document.querySelector("#btn");
//     this.btnEl.addEventListener("click", this.addTodo);
//   }
//   addTodo = () => {
//     console.log(this.inputEl.value);
//   };
// }

// this

// new Todo(); // {inputEl, btnEl, addTodo}

// Abstraction
// // {name, age ,aslas bnewbf f}
// function Employee(name, age, salary) {
//   this.name = name;
//   this.age = age;
//   this.salary = salary;

//   let bouns = 1000;

//   let calcTotalSalary = () => {
//     console.log(this.salary + bouns);
//   };

//   this.getEmpDetails = function () {
//     console.log(`Name: ${this.name} | Age: ${this.age}`);
//     calcTotalSalary();
//   };
// }

// let emp = new Employee("ahmed", 20, 1000);
// // emp.bouns = 5000;
// // emp.calcTotalSalary(); // 6000
// emp.getEmpDetails();

// // console.log(emp);

// Inheritance

class Car {
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
  }

  move() {
    console.log("move");
  }

  info() {
    console.log(this.name, this.model, this.price);
  }
}

// class BMW extends Car {}

// let bmw = new BMW("bmw", 2022, 10000);
// console.log(bmw);
// bmw.info();

// class BYD extends Car {
//   constructor(name, model, price, color) {
//     super(name, model, price);
//     this.color = color;
//   }
// }

// let byd = new BYD("byd", 2000, 20000, "red");
// console.log(byd);

//  Programmer  Teacher  Accountant

// class Employee {
//   constructor(name, age, work) {
//     this.name = name;
//     this.age = age;
//     this.work = work;
//   }
// }

// class Programmer extends Employee {
//   constructor(name, age, work, remotly) {
//     super(name, age, work);
//     this.remotly = remotly;
//   }
// }

// let pr = new Programmer("ahmed", 20, "Amazon", "yes");

// Polymorphism

class Animal {
  constructor(name) {
    this.name = name;
  }

  eats() {
    console.log(`${this.name} eats food`);
  }
}

class Fish extends Animal {
  eats() {
    super.eats();
    console.log(`${this.name} eats fishes`);
  }
}

let f = new Fish("fish");
f.eats();

// Min Bank
// class Bank {

// }
