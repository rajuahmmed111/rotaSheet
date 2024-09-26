import { Teacher } from "./person";

export class MathTeacher implements Teacher {
  name: string;
  age: number;
  subject: string;

  constructor(name: string, age: number, subject: string) {
    this.name = name;
    this.age = age;
    this.subject = subject;
  }

  introduce(): any {
    console.log(
      `Hello, I am ${this.name}, I am ${this.age} years old and I teach ${this.subject}.`
    );
  }
}
