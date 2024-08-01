/// <reference path='./subjects/Teacher.ts' />
/// <reference path='./subjects/Subject.ts' />
/// <reference path='./subjects/Cpp.ts' />
/// <reference path='./subjects/React.ts' />
/// <reference path='./subjects/Java.ts' />

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();
export const cTeacher: Subjects.Teacher = {
  firstName: 'Abiodun',
  lastName: 'Oludipe',
  experienceTeachingC: 10,
};

// For Cpp
console.log('C++');
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java
console.log('Java');
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React
console.log('React');
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
