import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';

interface Student {
  id: number;
  name: string;
  lastName: string;
  class: string;
  age: number;
  birthDate: Date;
  department: string;
  gender: string;
  gradeAverage: number;
  disable: string;
  awards: string[];
  lastEdit: Date;
}

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {

  constructor(
    private router: Router,
    private studentService: UserService,
    private route: ActivatedRoute
  ) { }
  students: Student[];
}