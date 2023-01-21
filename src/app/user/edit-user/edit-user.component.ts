import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  studentForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  student: any;

  ngOnInit() {
    this.student = JSON.parse(localStorage.getItem('detail') || '{}');
    this.studentForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      class: [''],
      age: [''],
      date: [''],
      field: [''],
      gender: [''],
      average: [''],
      disabled: [],
      awards: [''],
    });
    this.studentForm.get('firstname').setValue(this.student.firstname);
    this.studentForm.get('lastname').setValue(this.student.lastname);
    this.studentForm.get('class').setValue(this.student.class);
    this.studentForm.get('age').setValue(this.student.age);
    this.studentForm.get('date').setValue(this.student.date);
    this.studentForm.get('field').setValue(this.student.spec);
    this.studentForm.get('gender').setValue(this.student.gender);
    this.studentForm.get('average').setValue(this.student.average);
    this.studentForm.get('disabled').setValue(this.student.disabled);
    this.studentForm.get('awards').setValue(this.student.awards);
  }
  submit() {
    if (this.studentForm.valid) {
      localStorage.setItem(
        'students',
        JSON.stringify(
          JSON.parse(localStorage.getItem('students') || '[]').map(
            (studentt: any) =>
              studentt.lastedit == this.student.lastedit
                ? {
                    ...studentt,
                    lastedit: new Date(),
                    ...this.studentForm.value,
                  }
                : studentt
          )
        )
      );
      this.router.navigate(['listuser']);
    }
  }
}
