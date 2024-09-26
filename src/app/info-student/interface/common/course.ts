export class Course {
  courseName: string;
  duration: number;

  constructor(courseName: string, duration: number) {
    this.courseName = courseName;
    this.duration = duration;
  }

  getCourseInfo(): string {
    return `Course: ${this.courseName}, Duration: ${this.duration} day`;
  }
}

export function displayCourseInfo(course: Course): any {
  console.log(course.getCourseInfo());
}
