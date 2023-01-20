import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {

  constructor(
    private router: Router,
    private studentService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
    if (localStorage.getItem('logged') != 'neznama') {
      this.router.navigate(['./']);
      }
  }
  submit(
    name: string,
    lastname: string,
    classko: string,
    age: string,
    date: string,
    spec: string,
    gender: string,
    average: string,
    disabled: string,
    awards: string
  
  ): void {
    let data: [{}] = JSON.parse(localStorage.getItem('students') || '[{}]');
    localStorage.setItem(
      'students',
      JSON.stringify([
        ...data,
      {
          name: name,
          lastname: lastname,
          classko: classko,
          age: age,
          date: date,
          spec: spec,
          gender: gender,
          average: average,
          disabled: disabled,
          awards: awards,
          lastedit: new Date()
      }
      ])
    );

    this.router.navigate(['listuser']);
  }
}