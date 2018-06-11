export class BaseObject {
  width: number;
  length: number;

  constructor() {
    this.width = 0;
    this.length = 0;
  }
}

export class Rectangle extends BaseObject {

  constructor(width: number, length: number) {
    super();
    this.width = width;
    this.length = length;
  }

  calcSize() {
    return this.width * this.length;
  }
}

let rt = new Rectangle(5, 4);
console.log(rt.calcSize());
