// Task 1

interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

// Testing Teacher Interface
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher3);

// Task 2
interface Directors extends Teacher {
  numberOfReports: number;
}

// Testing Director Interface
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// Task 3
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Testing the function
console.log(printTeacher("Azeez", "Adebayo"));

// Task 4

/**
 * Interface for the StudentClass.
 * It is implemented by the StudentClass
 */
interface StudentInterface {
  firstName: string;
  lastName: string;

  workOnHomework(): string;

  displayName(): string;
}

/**
 * Interface for the contructor.
 * It is used when calling the constructor of the StudentClass.
 */
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

/**
 * The StudentClass that implements the StudentInterface
 */
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Testing the class and interface
const studentConstructor: StudentConstructor = StudentClass;
const student1: StudentInterface = new studentConstructor("Bosun", "Olayemi");
