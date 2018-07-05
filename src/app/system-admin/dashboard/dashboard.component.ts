import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // temporary
  public isLogin : boolean = true;

  constructor() { }

  ngOnInit() {
  }

  test()
  {
      window.location.href = '/login'
  }

}
