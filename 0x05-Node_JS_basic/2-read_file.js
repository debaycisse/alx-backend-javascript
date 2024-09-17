const fs = require('fs');

module.exports = function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const stat = {
      "numOfStudents": 0,
      "fields": {}
    };
    const dataSplit = data.split("\n");
    let i = 1;
    while (i < dataSplit.length) {
      if (dataSplit[i] !== undefined) {
        stat.numOfStudents += 1;
        const k = dataSplit[i].split(',')[3]
        if (!(k in stat.fields)) {
          stat.fields[k] = {
            "counts": 1,
            "names": [dataSplit[i].split(',')[0]]
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
      const fieldCount = stat.fields[field]['counts'];
      const studentNames = stat.fields[field]['names'];
      console.log(`Number of students in ${field}: ${fieldCount}. List: ${studentNames.toString()}`);
    }
  } catch (error) {
    throw new Error("Cannot load the database");
    // return "Cannot load the database";
  }
}