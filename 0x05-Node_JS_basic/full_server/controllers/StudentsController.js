const readDatabase = require("../utils");

const filePath = process.argv[2];

class StudentsController {
  static getAllStudents(request, response) {
    response.statusCode = 200;
    readDatabase(filePath)
  }
}