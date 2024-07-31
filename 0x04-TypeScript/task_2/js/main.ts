// Task 5

/**
 * Interface describes the shape for:
 * 1. workFromHome function
 * 2. getCoffeeBreak function
 * 3. workDirectorTasks function
 */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

/**
 * Interface describes the shape for:
 * 1. workFromHome function
 * 2. getCoffeeBreak function
 * 3. workTeacherTasks function
 */
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

/**
 * class implements the DirectorInterface
 */
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

/**
 * class implements the TeacherInterface
 */
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

/**
 * takes salary and execute its process
 * @param salary - can be either number or string type
 * @returns either the Teacher or Director instance
 */
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Testing the function
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


// Task 6
function isDirector(employee: Director | Teacher): boolean {
    if (employee instanceof Director) {
        return true;
    }
    return false;
}

function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return (employee as Director).workDirectorTasks();
    }
    return (employee as Teacher).workTeacherTasks();
    
}

// Tesing task 6
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));