import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';



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
  lastedit: Date;
}

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent {
  students: Student[];

  ngOnInit() {
    this.students = JSON.parse(localStorage.getItem('students') || '[]');
  }

  navigateToEdit(student: any) {
    localStorage.setItem('detail', JSON.stringify(student));
    this.router.navigate(['edituser']);
  }

  navigateToDetail(student: any) {
    localStorage.setItem('detail', JSON.stringify(student));
    this.router.navigate(['detail-user']);
  }

  delete(student: any) {
    console.log('delete');
    localStorage.setItem(
      'students',
      JSON.stringify(
        this.students.filter((studnet) => {
          return studnet !== student;
        })
      )
    );
    this.router.navigate(['./']);
  }

  constructor(
    private router: Router,
    private studentService: UserService,
    private route: ActivatedRoute
  ) {}
}
