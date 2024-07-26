export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const carCloneSymb = Symbol('cloneCar');
    this[carCloneSymb] = new Car(this.brand, this.motor, this.color);
    return this[carCloneSymb];
  }
}
