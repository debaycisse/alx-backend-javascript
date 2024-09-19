const fs = require('fs').promises;
const countStudents = require('../3-read_file_async');

/**
 * 
 * @param {*} filePath - a path to the file whose content is to be read 
 * @returns - a list of firstnames and fields
 */
const readDatabase = async (filePath) => {
  countStudents(filePath)
    .then((data) => {
      const dataSplit = data.split('\n');
      return dataSplit.slice(1);
    })
    .catch((error) => {
      throw new Error('Database cannot be loaded');
    });

};

module.exports = readDatabase;
