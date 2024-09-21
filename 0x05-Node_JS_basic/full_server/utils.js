const countStudents = require('../3-read_file_async');

/**
 * @param {*} filePath - a path to the file whose content is to be read
 * @returns - a list of firstnames and fields
 */
const readDatabase = async (filePath) => new Promise((resolve, reject) => {
  countStudents(filePath)
    .then((data) => {
      const dataSplit = data.split('\n');
      resolve(dataSplit.slice(1));
    })
    .catch((error) => reject(error));
});

module.exports = readDatabase;
