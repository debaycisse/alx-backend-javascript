import Currency from './3-currency';

export default class Pricing {
  /**
   * Creates an instance of a Pricing class
   * @param {number} amount - the amount of a Pricing instance
   * @param {Currency} currency - the currency of a Pricing instance
   */
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number type');
    }
    this._amount = amount;

    if (!(currency instanceof Currency)) {
      throw TypeError('Currency must be a Currency type');
    }
    this._currency = currency;
  }

  /**
   * Retrieves amount attribute of an instance
   */
  get amount() {
    return this._amount;
  }

  /**
   * Updates amount attribute or field of an instance
   *
   * @param {number} newAmount - the new value to update the amount field of an instance
   */
  set amount(newAmount) {
    if (!(typeof amount !== 'number')) {
      throw TypeError('Amount must be a number type');
    }
    this._amount = newAmount;
  }

  /**
   * Retrieves currency attribute of an instance
   */
  get currency() {
    return this._currency;
  }

  /**
   * Updates currency attribute of an instance
   *
   * @param {Currency} newCurrency - the value to update the currency attribute of an instance
   */
  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw TypeError('Currency must be a Currency type');
    }
    this._currency = newCurrency;
  }

  /**
   * Displays both the amount and currency's data
   * @returns an amount, currency's name and currency's code
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   * Converts from one amount to another amount
   *
   * @param {number} amount - the value of an amount
   * @param {number} conversionRate - the value of a conversion rate
   * @returns the converted value of given amount
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
