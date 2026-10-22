// A Vehicle describes the shape every vehicle must have.
// Interfaces only declare types, so start() has no body here;
// each implementing class decides what start() logs.
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

const myCar = new Car("Toyota", "Corolla", 2022);
console.log(`${myCar.year} ${myCar.make} ${myCar.model}`);
myCar.start();
