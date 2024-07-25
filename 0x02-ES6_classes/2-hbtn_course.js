export default class HolbertonCourse {
  /**
   * Creates an instance of the HolbertonCourse
   *
   *@param {string} name - this is the name of the course. It must be a string type.
   *@param {number} length - the length of the course. It must be a number type.
   *@param {Array<string>} students - Array of students, offering the course.
   */
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    } else {
      this._name = name;
    }

    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    } else {
      this._length = length;
    }

    if (!(Array.isArray(students))) {
      throw TypeError('Students must be an array');
    }
    students.forEach((student) => {
      if (typeof student !== 'string') {
        throw TypeError('All students in the array must be a string');
      }
    });
    this._students = students;
  }

  /**
   * Retrieves an instance's name field or attribute
   */
  get name() {
    return this._name;
  }

  /**
   * Updates an instance's name field or attribute
   *
   *@param {string} name - value with which an instance's name is updated
   */
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

  /**
   * Retrieves an instance's length field or attribute
   */
  get length() {
    return this._length;
  }

  /**
   * Updates an instance's length field or attribute
   *
   *@param {number} length - value with which an instance's length is updated
   */
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

  /**
   * Retrieves an instance's students field or attribute
   */
  get students() {
    return this._students;
  }

  /**
   * Updates an instance's student's field or attribute
   *
   *@param {Array<string>} students - value with which an instance's students is updated
   */
  set students(students) {
    if (!(Array.isArray(students))) {
      throw TypeError('Students must be an array');
    }
    students.forEach((student) => {
      if (typeof student !== 'string') {
        throw TypeError('All students in the array must be a string');
      }
    });
    this._students = students;
  }
}
