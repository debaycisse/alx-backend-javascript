const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul');

describe('Testing the calculateNumber Function', () => {
  describe('Testing the SUBTRACT operation', () => {
    it('Should return a positive value', () => {
      expect(calculateNumber('SUBTRACT', 2, 1)).to.be.above(0);
    });
    it('Should return a negative value', () => {
      expect(calculateNumber('SUBTRACT', 1, 2)).to.be.below(0);
    });
    it('Should convert a string number', () => {
      expect(typeof calculateNumber('SUBTRACT', '23', '20') === 'number').to.be.true;
    });
    it('Should return NaN', () => {
      expect(isNaN(calculateNumber('SUBTRACT', 'One', 20))).to.be.true;
    });
  });

  describe('Testing the SUM operation', () => {
    it('Should sum two given values', () => {
      expect(calculateNumber('SUM', 2, 1)).to.equal(3);
    });
    it('Should round up a floating point value', () => {
      expect(calculateNumber('SUM', 1.5, 1.7)).to.equal(4);

    });
    it('Should convert a string number', () => {
      expect(typeof calculateNumber('SUM', '23', '20') === 'number').to.be.true;
    });
    it('Should return NaN', () => {
      expect(isNaN(calculateNumber('SUM', 'One', 20))).to.be.true;
    });
  });

  describe('Testing the DIVIDE operation', () => {
    it('Should return a value less than one', () => {
      expect(calculateNumber('DIVIDE', 1, 2) < 1).to.be.true;
    });
    it('Should return a value, greater than one', () => {
      expect(calculateNumber('DIVIDE', 3.5, 1.7) > 1).to.be.true;
    });
    it('Should convert a string number', () => {
      expect(typeof calculateNumber('DIVIDE', '23', '20') === 'number').to.be.true;
    });
    it('Should return NaN', () => {
      expect(isNaN(calculateNumber('DIVIDE', 'One', 20))).to.be.true;
    });
  });
});
