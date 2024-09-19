const readDatabase = require("../utils");

const filePath = process.argv[2];

class StudentsController {
  static getAllStudents(request, response) {
    response.setHeader('Content-Type', 'text/plain');
    try {
      response.statusCode = 200;
      let resMsg = 'This is the list of our students\n';
      resMsg += readDatabase(filePath);
      response.send(resMsg);
    } catch (error) {
      response.statusCode = 500;
      response.send('Database cannot be loaded');
    }
  }

  static getAllStudentsByMajor(request, response) {
    response.setHeader('Content-Type', 'text/plain');
    try {
      response.statusCode = 200;
      const major = request.query.major;

    } catch (error) {
      response.statusCode = 500;
      response.send('Database cannot be loaded');
    }
  }
}

module.exports = StudentsController;
