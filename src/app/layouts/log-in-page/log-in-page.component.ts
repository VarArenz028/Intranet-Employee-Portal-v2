import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss']
})
export class LogInPageComponent implements OnInit {

  public loginForm : FormGroup;
  public hide : boolean = true;
  public popDiolog : boolean = true;
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

  toggleDialog()
  {
      if(this.popDiolog == false)
      {
          this.popDiolog = true;
      }
      else
      {
        this.popDiolog = false;
      }
  }
  

}
