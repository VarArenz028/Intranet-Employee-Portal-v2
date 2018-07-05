import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule,
         appRoutingComponents, 
         systemAdminRoutingComponents} from './app-routing.module';

// angular materials setup
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialsModule } from './app-materials.module';
import { GlobalEventsManager } from './GlobalEventsManager';
import { LogInPageComponent } from './layouts/log-in-page/log-in-page.component';
import { CampaignsComponent } from './system-admin/campaigns/campaigns.component';
import { SideNavComponent } from './layouts/side-nav/side-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        AppComponent,
        LogInPageComponent,
        SideNavComponent,
        systemAdminRoutingComponents
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        AppMaterialsModule,
        FontAwesomeModule
    ],
    providers: [GlobalEventsManager],
    bootstrap: [AppComponent]
})
export class AppModule { }
