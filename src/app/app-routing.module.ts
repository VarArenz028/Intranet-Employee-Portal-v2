import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LogInPageComponent } from './layouts/log-in-page/log-in-page.component';

// System Admin Components
import { DashboardComponent } from './system-admin/dashboard/dashboard.component';
import { CampaignsComponent } from './system-admin/campaigns/campaigns.component';
import { UsersComponent } from './system-admin/users/users.component';

const routes : Routes = [

    {path : 'login', component : LogInPageComponent},

    // System Admin
    {path : 'system-admin/dashboard', component : DashboardComponent},
    {path : 'system-admin/campaigns', component : CampaignsComponent},
    {path : 'system-admin/users', component : UsersComponent}

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const appRoutingComponents = [
    LogInPageComponent
];

// Routing components for System Admin
export const systemAdminRoutingComponents = [

    DashboardComponent,
    CampaignsComponent,
    UsersComponent

];

export const campaignAdminRoutingComponents = [];

export const agentRoutingComponents = [];
