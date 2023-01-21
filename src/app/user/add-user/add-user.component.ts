import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  studentForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private studentService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() { 
    this.studentForm = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    class: [''],
    age: [''],
    birthdate: [''],
    field: [''],
    gender: [''],
    average: [''],
    disabled: [],
    awards: [''],
  });}


  submit() {
    if (this.studentForm.valid) {
      let data: [{}] = JSON.parse(localStorage.getItem('students') || '[]');
      localStorage.setItem(
        'students',
        JSON.stringify([
          ...data,
          {
            ...this.studentForm.value,
            lastedit: new Date(),
          },
        ])
      );
      this.router.navigate(['listuser']);
    }
  }
}