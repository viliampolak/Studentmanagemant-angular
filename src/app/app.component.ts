import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  ngOnInit() {
  localStorage.setItem('logged', 'false');
  localStorage.setItem('id', '0');
}
 }
