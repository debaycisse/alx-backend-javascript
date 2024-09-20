const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('testing the calculateNumber Function', () => {
  describe('testing the SUBTRACT operation', () => {
    it('should return a positive value', () => {
      assert.ok(calculateNumber('SUBTRACT', 2, 1) > 0);
    });
    it('should return a negative value', () => {
      assert.ok(calculateNumber('SUBTRACT', 1, 2) < 0);
    });
    it('should convert a string number', () => {
      assert.ok(typeof calculateNumber('SUBTRACT', '23', '20') === 'number');
    });
    it('should return NaN', () => {
      assert.ok(Number.isNaN(calculateNumber('SUBTRACT', 'One', 20)));
    });
  });

  describe('testing the SUM operation', () => {
    it('should sum two given values', () => {
      assert.strictEqual(calculateNumber('SUM', 2, 1), 3);
    });
    it('should round up a floating point value', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 1.7), 4);
    });
    it('should convert a string number', () => {
      assert.ok(typeof calculateNumber('SUM', '23', '20') === 'number');
    });
    it('should return NaN', () => {
      assert.ok(Number.isNaN(calculateNumber('SUM', 'One', 20)));
    });
  });

  describe('testing the DIVIDE operation', () => {
    it('should return a value less than one', () => {
      assert.ok(calculateNumber('DIVIDE', 1, 2) < 1);
    });
    it('should return a value, greater than one', () => {
      assert.ok(calculateNumber('DIVIDE', 3.5, 1.7) > 1);
    });
    it('should convert a string number', () => {
      assert.ok(typeof calculateNumber('DIVIDE', '23', '20') === 'number');
    });
    it('should return NaN', () => {
      assert.ok(Number.isNaN(calculateNumber('DIVIDE', 'One', 20)));
    });
  });
});
