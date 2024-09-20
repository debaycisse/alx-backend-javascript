/**
 * Rounds up the given numbers and obtains their sum
 * @param {number} a - the first of the two numbers
 * @param {number} b - the second of the two numbers
 * @returns {number} The sum of the rounded values of the numbers
 */
module.exports = function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
};
