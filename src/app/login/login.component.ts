import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  email: string;
  password: string;

  loginuser() {
    if (this.password == 'a' && this.email == 'a@a'){    
    localStorage.setItem('logged', 'true');
    this.router.navigate(['/listuser']);
    }

  }

  ngOnInit() {}
}
