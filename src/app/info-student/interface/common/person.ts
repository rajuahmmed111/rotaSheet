interface Person {
  name: string;
  age: number;
}

export interface Teacher extends Person {
  subject: string;
}
