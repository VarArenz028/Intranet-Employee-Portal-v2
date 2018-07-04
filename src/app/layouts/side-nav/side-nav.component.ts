import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  // Temporary to build UI
  public role : string = 'system-admin';
  constructor() { }

  ngOnInit() {
    
  }

}
