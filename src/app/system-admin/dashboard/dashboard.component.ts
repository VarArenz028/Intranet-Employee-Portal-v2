import { Component, OnInit } from '@angular/core';
import { faIndustry, faUserFriends } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // temporary
  public isLogin : boolean = true;

  // icons
  public campaigns = faIndustry;
  public users = faUserFriends;
  constructor() { }

  ngOnInit() {
  }

}
