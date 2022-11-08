import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards =['Card title 1', 'Card title 2', 'Card title 3'];

  constructor(private router: Router) { }

  onModuleOneClick() {
    this.router.navigate(['one']);
  }
  onModuleTwoClick() {
    this.router.navigate(['two']);
  }
  onGetToHomeClick() {
    this.router.navigate(['']);
  }
}
