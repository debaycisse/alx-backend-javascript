export default class Building {
  /**
   * Creates an instance of a building class
   * @param {number} sqft - value for the squarefoot. It must be of type number
   */
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('Square fit must be a number');
    }
    this._sqft = sqft;
  }

  /**
   * Retrieves the value of the squarefoot of an instance
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * This method must be implemented by any child class
   * that extends or inherits this class.
   */
  /* eslint-disable class-methods-use-this */
  evacuationWarningMessage() {
    throw Error('Class extending Building must override evacuationWarningMessage');
  }
}
