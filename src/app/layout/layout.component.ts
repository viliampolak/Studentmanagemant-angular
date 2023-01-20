import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  constructor(private router: Router) {}
  navbarCollapsed = true;
  v = localStorage.getItem('logged');

  toggleNavbarCollapsing() {
    this.v = localStorage.getItem('logged');
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  logout() {
    localStorage.setItem('logged', 'false');
    this.router.navigate(["login"])
  }

}