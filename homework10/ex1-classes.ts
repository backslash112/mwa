export class Car {
  name: string;
  acceleration: number;

  honk() {
    console.log(this.name);
  }

  accelerate(speed: number) {
    this.acceleration += speed;
  }
  constructor(name) {
    this.name = name;
    this.acceleration = 0;
  }
}


let car = new Car('BMW');
car.accelerate(100);
car.honk();
