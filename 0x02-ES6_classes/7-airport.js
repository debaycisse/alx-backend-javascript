export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;

    if (typeof code !== 'string') {
      throw TypeError('Code must be a string');
    }
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
