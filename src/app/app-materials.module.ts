import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule
  ],
  exports: [

    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
    
    ],
  declarations: []
})
export class AppMaterialsModule { }
