const readDatabase = require('../utils');

const filePath = process.argv[2];

class StudentsController {
  static getAllStudents(request, response) {
    response.setHeader('Content-Type', 'text/plain');
    response.statusCode = 200;
    let resMsg = 'This is the list of our students\n';
    readDatabase(filePath)
      .then((data) => {
        const dataLength = data.length;
        for (let i = 0; i < dataLength; i += 1) {
          if (i + 1 === dataLength) {
            resMsg += data[i];
          } else {
            resMsg += `${data[i]}\n`;
          }
        }
        response.send(resMsg);
      })
      .catch(() => {
        response.statusCode = 500;
        response.send('Database cannot be loaded');
      });
  }

  static getAllStudentsByMajor(request, response) {
    response.setHeader('Content-Type', 'text/plain');
    response.statusCode = 200;
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      return response.send('Major parameter must be CS or SWE');
    }
    let resMsg = 'This is the list of our students\n';
    return readDatabase(filePath)
      .then((data) => {
        for (const message of data) {
          if (message.includes(major)) {
            resMsg += `List:${message.split('List:')[1]}`;
            break;
          }
        }
        response.send(resMsg);
      })
      .catch(() => {
        response.statusCode = 500;
        response.send('Database cannot be loaded');
      });
  }
}

module.exports = StudentsController;
