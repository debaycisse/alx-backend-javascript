/// <reference path='./Teacher.ts' />
/// <reference path='./Subject.ts' />
/// <reference path='./Cpp.ts' />
/// <reference path='./React.ts' />

namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subjects.Subject {
    experienceTeachingJava?: number;

    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingJava) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
