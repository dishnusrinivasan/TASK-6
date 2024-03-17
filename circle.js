class circle {
  constructor(radius, color) {
    this._radius = radius;
    this._color = color;
  }

  get radius() {
    return this._radius;
  }

  set radius(newrad) {
    this._radius = newrad;
  }
  
  get color() {
    return this._color;
  }

  set color(newrad) {
    this._color = newrad;
  }

  tostr() {
    console.log(`circle[radius=${this._radius},color=${this._color}]`);
  }

  getarea() {
    console.log(Math.PI * this._radius ** 2);
  }

  getcircum() {
    console.log(2 * Math.PI * this._radius);
  }
}

const ob1 = new circle(5, "red");
ob1.tostr();
ob1.getarea();
ob1.getcircum(); // circle[radius
