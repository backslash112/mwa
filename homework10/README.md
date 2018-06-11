### Exercise - Classes
Re-write the following code using TypeScript Class syntax. Try to be as explicit as possible and add Types to everything you can!
```javascript
function Car (name)
{
  this.name = name;
  this.acceleration = 0;
  this.honk = function() {
      console.log(' ${this.name} is saying: Tooooo00000t!');
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
```

### Exercise - Inheritance
Re-write the following code using TypeScript Class syntax. Try to be as explicit as possible and add Types to everything you can!

```javascript
var baseObject = { width: O, length: () };
var rectangle = Object.create (baseObject) ;
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
  return this.width * this.length;
}
console.log(rectangle.calcSize()); // 10
```

### Exercise - Property: Getter and Setter
Re-write the following code using TypeScript Class syntax. Try to be as explicit as possible and add Types to everything you can!
```javascript
var person = { firstName: "" },;
Object.defineProperty (person, "firstName", get: function () {
  return this. firstName;
},

set: function (value) {
Chis. firstName = value.toUpperCase ();
},
enumerable: true,
configurable: true
});
person.firstName = "Asaad"; console.log(person.firstName); // ASAAD
```

### Run with Docker
```
docker run -it --rm -v $(pwd):/workspace harmish/typescript tsc -p /workspace --outDir /workspace/build
```
