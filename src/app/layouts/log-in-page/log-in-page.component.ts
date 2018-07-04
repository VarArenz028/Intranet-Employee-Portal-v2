import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { fade } from '../../animations';
import { Router } from '@angular/router';
import { GlobalEventsManager } from '../../GlobalEventsManager';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss'],
  animations: [fade]
})
export class LogInPageComponent implements OnInit {

  public loginForm : FormGroup;
  public hide : boolean = true;
  public popProperty : string = 'hide';
  public isLogin : boolean = true;
  constructor(private formBuilder : FormBuilder, private router : Router, private globalEventsManager : GlobalEventsManager) { }

  ngOnInit()
  {
      this.createLoginForm();
  }
  
  // login form
  createLoginForm()
  {
      this.loginForm = this.formBuilder.group({
          username : [''],
          password : ['']
      });
  }

  // toggles pop-up dialog
  toggleDialog()
  {
      if(this.popProperty === 'show')
      {
          this.popProperty = 'hide';
      }
      else if(this.popProperty === 'hide')
      {
          this.popProperty = 'show';
      }
  }
  
  loginTest()
  {
      this.globalEventsManager.showNavBar(true);
      console.log(this.globalEventsManager.showNavBar(true));
        
    //   this.router.navigate(['system-admin/dashboard']);
  }

}
