export default class Currency {
  /**
   * Creates a Currency object
   *
   * @param {string} code - the code of the currency. It must be a string.
   * @param {string} name - the name of the currency. It must be a string.
   */
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw TypeError('Code must be a string type');
    } else {
      this._code = code;
    }

    if (typeof name !== 'string') {
      throw TypeError('Name must be a string type');
    } else {
      this._name = name;
    }
  }

  /**
   * Retrieves an instance's code field or attribute
   */
  get code() {
    return this._code;
  }

  /**
   * Updates an instance's code field or attribute
   *
   * @param {string} code - the value with which an instance's code is updated
   */
  set code(code) {
    if (typeof code !== 'string') {
      throw TypeError('Code must be a string type');
    } else {
      this._code = code;
    }
  }

  /**
   * Retrieves an instance's name field or attribute
   */
  get name() {
    return this._name;
  }

  /**
   * Updates an instance's name field or attribute
   *
   * @param {string} name - the value with which an instance's name is updated
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string type');
    } else {
      this._name = name;
    }
  }

  /**
   * Displays both the currency's name and code
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
