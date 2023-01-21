import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css'],
})
export class DetailUserComponent implements OnInit {
  
  constructor(private router: Router) {}
  student: any;
  ngOnInit() {
    this.student = JSON.parse(localStorage.getItem('edit') || '{}');
  }

}
