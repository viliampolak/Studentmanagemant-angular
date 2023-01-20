import { Injectable } from '@angular/core';

interface Student {
  id: number;
  firstname: string;
  lastname: string;
  class: string;
  age: number;
  birthdate: Date;
  field: string;
  gender: string;
  average: number;
  disable: string;
  awards: string[];
  lastEdit: Date;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private students: Student[] = [];

  addStudent(student: Student) {
    this.students.push(student);
  }

  saveStudent(student: Student) {
    const studentToUpdate = this.students.find((s) => s.id === student.id);
    if (studentToUpdate) {
      studentToUpdate.firstname = student.firstname;
      studentToUpdate.lastname = student.lastname;
      studentToUpdate.class = student.class;
      studentToUpdate.age = student.age;
      studentToUpdate.birthdate = student.birthdate;
      studentToUpdate.field = student.field;
      studentToUpdate.gender = student.gender;
      studentToUpdate.average = student.average;
      studentToUpdate.disable = student.disable;
      studentToUpdate.awards = student.awards;
    }
  }

  deleteStudent(student: Student) {
    const studentIndex = this.students.findIndex((s) => s.id === student.id);
    if (studentIndex !== -1) {
      const studentToDelete = this.students[studentIndex];
      this.students.splice(studentIndex, 1);
      console.log(
        `Deleted student: ${studentToDelete.firstname} ${studentToDelete.lastname}`
      );
    } else {
      console.log('not found');
    }
  }

  getStudents() {
    return this.students;
  }
}