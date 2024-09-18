const { count } = require('console');

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
        let found = null;
        const _key = dataSplit[i][3];
        for (const info of studentInfo) {
          if (_key in info) {
            found = i;
            break;
          }
        }
        if (found !== null) {
          const stdName = dataSplit[i][0];
          studentInfo[found][count] += 1;
          studentInfo[found][names].push(stdName);
        } else {
          const keyInfo = {
            _key: {count: 1, names: [dataSplit[i][0]]}
          };
          studentInfo.push(keyInfo);
        }
      }


      i += 1;
    }
    
    return studentInfo;
  } catch (error) {
    throw new Error('Database cannot be loaded');
  }
};

module.exports = readDatabase;
