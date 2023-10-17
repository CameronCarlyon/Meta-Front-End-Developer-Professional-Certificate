// Task 1: Code a Person class
class Person {
  constructor(name, age, energy) {
    this.name = "Tom";
    this.age = 20;
    this.energy = 100;
  }
  sleep() {
    if (this.energy < 100) {
      this.energy += 10;
    }
  }
  doSomethingFun() {
    if (this.energy < 0) {
      this.energy -= 10;
    }
  }
}
// Task 2: Code a Worker class
class Worker extends Person {
  constructor(name, age, energy, xp, hourlyWage) {
    super(name, age, energy);
    this.xp = 0;
    this.hourlyWage = 10;
  }
  goToWork() {
    this.xp = this.xp += 10;
  }
}
// Task 3: Code an intern object, run methods
function intern() {
  let intern = new Worker();
  intern.name = "Bob";
  intern.age = 21;
  intern.energy = 110;
  intern.xp = 0;
  intern.hourlyWage = 10;
  intern.goToWork();
  return intern;
}

// Task 4: Code a manager object, methods
function manager() {
  let manager = new Worker();
  manager.name = "Alice";
  manager.age = 30;
  manager.energy = 120;
  manager.xp = 100;
  manager.hourlyWage = 30;
  manager.doSomethingFun();
  return manager;
}
// console.log(intern());
// console.log(manager());
