/**
 * Rounds up the given numbers and obtains their sum
 * @param {number} a - the first of the two numbers
 * @param {number} b - the second of the two numbers
 * @param {string} type - the type of operation - SUM, SUBTRACT, DIVIDE
 * @returns {number} result of a given operation
 */
module.exports = function calculateNumber(type, a, b) {
  if (type !== 'SUM' && type !== 'SUBTRACT' && type !== 'DIVIDE') {
    return 0;
  }
  if (type === 'SUM') return Math.round(a) + Math.round(b);
  if (type === 'SUBTRACT') return Math.round(a) - Math.round(b);
  if (type === 'DIVIDE') {
    if (Math.round(b) <= 0 || Number.isNaN(Math.round(b))) return 'Error';
  }
  return Math.round(a) / Math.round(b);
};
