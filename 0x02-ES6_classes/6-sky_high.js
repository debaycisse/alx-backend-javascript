import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors !== 'number') {
      throw TypeError('Floors must be a numbe');
    }
    this._floors = floors;
  }

  /**
   * Retrives an instance's floor attribute
   */
  get floors() {
    return this._floors;
  }

  /**
   * Overrides the (abstract) function from the super class.
   * @returns the message, regarding the number of floors, being evacuated
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
