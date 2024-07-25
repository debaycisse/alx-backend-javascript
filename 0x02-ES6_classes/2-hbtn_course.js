class HolbertonCourse{
  constructor(name, length, students){
    if (typeof name !=='String) {
      throw TypeError('Name must be a string')
    }
    this._name = name;
    if (typeof length !== Number)
       throw TypeError('Length must be a number')
    this._length = length;
    this._students = students
  }
}
