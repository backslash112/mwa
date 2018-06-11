### Exercise - Classes
Re-write the following code using TypeScript Class syntax. Try to be as explicit as possible and add Types to everything you can!
function Car (name)
{
  this.name = name;
  this.acceleration = 0;
  this.honk = function() {
      console.log(' S{this.name} iS saying: Toooocoo0o0o0ot!
  };
  this.accelerate = function(speed) {
    this.acceleration = this.acceleration + speed;
  }
}
var car = new Car ("BMW");
car.honk(); // BMW is saying: Tooooo00000t!
console.log(car.acceleration); // 0
car.accelerate (60);
console.log(car.acceleration); // 60
