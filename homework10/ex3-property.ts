export class Person {

  private _firstName: string = "";

  constructor(firstName: string) {
    this._firstName = firstName;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(firstName: string) {
    this._firstName = firstName;
  }
}

let carl = new Person("Carl");
console.log(carl.firstName);
carl.firstName = "NewCarl";
console.log(carl.firstName);
