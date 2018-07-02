import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule, appRoutingComponents, systemAdminRoutingComponents } from './app-routing.module';

// angular materials setup
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialsModule } from './app-materials.module';

@NgModule({
    declarations: [
        AppComponent,
        appRoutingComponents,
        systemAdminRoutingComponents
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        AppMaterialsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
