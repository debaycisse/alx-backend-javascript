const fs = require('fs').promises;

module.exports = async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const stat = {
      numOfStudents: 0,
      fields: {},
    };
    const dataSplit = data.split('\n');
    let i = 1;
    while (i < dataSplit.length) {
      if (dataSplit[i] !== undefined) {
        stat.numOfStudents += 1;
        const k = dataSplit[i].split(',')[3];
        if (!(k in stat.fields)) {
          stat.fields[k] = {
            counts: 1,
            names: [dataSplit[i].split(',')[0]],
          };
        } else {
          stat.fields[k].counts += 1;
          stat.fields[k].names.push(dataSplit[i].split(',')[0]);
        }
      }
      i += 1;
    }
    console.log(`Number of students: ${stat.numOfStudents}`);
    for (const field in stat.fields) {
      if (stat.fields[field]) {
        const fieldCount = stat.fields[field].counts;
        const studentNames = stat.fields[field].names;
        const msg = `Number of students in ${field}: ${fieldCount}. List: ${studentNames.join(', ')}`;
        console.log(msg);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
