import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { fade } from '../../animations';

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

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit()
  {
      this.createLoginForm();
  }
  
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
  

}
