const fs = require('fs').promises

/**
 * 
 * @param {*} filePath - a path to the file whose content is to be read 
 * @returns - a list of firstnames and fields
 */
const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath);
    const dataSplit = data.split('\n');
    const studentInfo = [{'CS': {count: 0, names: []}}];
    const i = 1;
    while (i < dataSplit.length) {
      if (dataSplit[i] !== undefined) {
        firstNames.push(dataSplit[i][0]);
        
      }
      i += 1;
    }
    return studentInfo;
  } catch (error) {
    throw new Error('Database cannot be loaded');
  }
};

module.exports = readDatabase;
