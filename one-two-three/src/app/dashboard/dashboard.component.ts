import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cards = ['Card title 1', 'Card title 2', 'Card title 3']

  constructor() { }

  ngOnInit(): void {
  }

}
