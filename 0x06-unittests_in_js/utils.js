const Utils = {
  calculateNumber(type, a, b) {
    if (type !== 'SUM' && type !== 'SUBTRACT' && type !== 'DIVIDE') {
      return 0;
    }
    if (type === 'SUM') return Math.round(a) + Math.round(b);
    if (type === 'SUBTRACT') return Math.round(a) - Math.round(b);
    if (type === 'DIVIDE') {
      if (Math.round(b) <= 0 || Number.isNaN(Math.round(b))) return 'Error';
    }
    return Math.round(a) / Math.round(b);
  },
};

module.exports = Utils;
