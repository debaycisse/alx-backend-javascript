const express = require('express');

const routes = express.Router();
const { getHomepage } = require('../controllers/AppController');
const {
  getAllStudents,
  getAllStudentsByMajor,
} = require('../controllers/StudentsController');

routes.get('/', (req, res) => {
  getHomepage(req, res);
});

routes.get('/students', (req, res) => {
  getAllStudents(req, res);
});

routes.get('/students/:major', (req, res) => {
  getAllStudentsByMajor(req, res);
});

module.exports = routes;
