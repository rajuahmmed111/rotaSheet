import { Component } from '@angular/core';
import { Student } from './interface/common/student.interface';
import { MathTeacher } from './interface/common/mathTeacher';

import { displayCourseInfo } from './interface/common/course';

@Component({
  selector: 'app-info-student',
  templateUrl: './info-student.component.html',
  styleUrls: ['./info-student.component.scss'],
})
export class InfoStudentComponent {
  // Task-1
  fullName: string = 'RAJU AHMMED';
  age: number = 21;
  isStudent: boolean = true;
  subjects: string[] = ['Mathematics', 'Physics', 'Computer Science'];

  profile: { fullName: string; age: number; subjects: string[] } = {
    fullName: this.fullName,
    age: this.age,
    subjects: this.subjects,
  };

  // constructor() {
  //   console.log('Full Name:', this.fullName);
  //   console.log('Age:', this.age);
  //   console.log('Is Student:', this.isStudent);
  //   console.log('Subjects:', this.subjects);
  //   console.log('Profile:', this.profile);
  // }

  // Task-2
  checkEligibility(age: number): string {
    return age >= 22
      ? 'Eligible for graduation'
      : 'Not eligible for graduation';
  }

  checkMultipleStudents(ages: number[]): void {
    for (let age of ages) {
      console.log(`Age: ${age}, Status: ${this.checkEligibility(age)}`);
    }
  }

  // constructor() {
  //   const studentAges = [20, 21, 22, 23];
  //   this.checkMultipleStudents(studentAges);
  // }

  // Task-3
  student: Student = {
    name: 'RAJU AHMMED',
    age: 21,
    getDetails: function (): string {
      return `Name: ${this.name}, Age: ${this.age}`;
    },
  };

  // constructor() {
  //   console.log(this.student.getDetails());
  // }

  // Task-4
  // constructor() {
  //   const course = new Course('Angular Development', 6);
  //   displayCourseInfo(course);
  // }

  // Task-5
  // introduction: string;

  // constructor() {
  //   const teacher = new MathTeacher('RAJU AHMMED', 21, 'Mathematics');
  //   this.introduction = teacher.introduce();
  // }
}


