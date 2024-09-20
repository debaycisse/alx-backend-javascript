const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('testing the calculateNumber Function', () => {
  describe('testing the SUBTRACT operation', () => {
    it('should return a positive value', () => {
      expect(calculateNumber('SUBTRACT', 2, 1)).to.be.above(0);
    });
    it('should return a negative value', () => {
      expect(calculateNumber('SUBTRACT', 1, 2)).to.be.below(0);
    });
    it('should convert a string number', () => {
      expect(typeof calculateNumber('SUBTRACT', '23', '20') === 'number').to.be
        .true;
    });
    it('should return NaN', () => {
      expect(Number.isNaN(calculateNumber('SUBTRACT', 'One', 20))).to.be.true;
    });
  });

  describe('testing the SUM operation', () => {
    it('should sum two given values', () => {
      expect(calculateNumber('SUM', 2, 1)).to.equal(3);
    });
    it('should round up a floating point value', () => {
      expect(calculateNumber('SUM', 1.5, 1.7)).to.equal(4);
    });
    it('should convert a string number', () => {
      expect(typeof calculateNumber('SUM', '23', '20') === 'number').to.be.true;
    });
    it('should return NaN', () => {
      expect(Number.isNaN(calculateNumber('SUM', 'One', 20))).to.be.true;
    });
  });

  describe('testing the DIVIDE operation', () => {
    it('should return a value less than one', () => {
      expect(calculateNumber('DIVIDE', 1, 2) < 1).to.be.true;
    });
    it('should return a value, greater than one', () => {
      expect(calculateNumber('DIVIDE', 3.5, 1.7) > 1).to.be.true;
    });
    it('should convert a string number', () => {
      expect(typeof calculateNumber('DIVIDE', '23', '20') === 'number').to.be
        .true;
    });
    it('should return NaN', () => {
      expect(Number.isNaN(calculateNumber('DIVIDE', 'One', 20))).to.be.true;
    });
  });
});
