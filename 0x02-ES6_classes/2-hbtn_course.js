export default class HolbertonCourse {
  constructor(name, length, students) {
    try {
      if (typeof name !== 'string') {
        throw TypeError('Name must be a string');
      } else {
        this._name = name;
      }
    } catch (error) {
      console.error(error);
    }

    try {
      if (typeof length !== 'number') {
        throw TypeError('Length must be a number');
      } else {
        this._length = length;
      }
    } catch (error) {
      console.error(error);
    }

    try {
      if (!(Array.isArray(students))) {
        throw TypeError('Students must be an array');
      }
      students.forEach((student) => {
        if (typeof student !== 'string') {
          throw TypeError('All students in the array must be a string');
        }
      });
      this._students = students;
    } catch (error) {
      console.error(error);
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    try {
      if (typeof name !== 'string') {
        throw TypeError('Name must be a string');
      } else {
        this._name = name;
      }
    } catch (error) {
      console.error(error);
    }
  }

  get length() {
    return this._length;
  }

  set length(length) {
    try {
      if (typeof length !== 'number') {
        throw TypeError('Length must be a number');
      } else {
        this._length = length;
      }
    } catch (error) {
      console.error(error);
    }
  }

  get students() {
    return this._students;
  }

  set students(students) {
    try {
      if (!(Array.isArray(students))) {
        throw TypeError('Students must be an array');
      }
      students.forEach((student) => {
        if (typeof student !== 'string') {
          throw TypeError('All students in the array must be a string');
        }
      });
      this._students = students;
    } catch (error) {
      console.error(error);
    }
  }
}
