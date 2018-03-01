import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';
import { MechanicDashboardComponent } from './components/mechanic-dashboard/mechanic-dashboard.component';
import { AdministratorDashboardComponent } from './components/administrator-dashboard/administrator-dashboard.component';

import { AuthGuard } from './services/guard.service';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "client", component: ClientDashboardComponent, canActivate:[AuthGuard]}, 
  { path: "client/register", component: RegisterComponent },
  { path: "manager", component: ManagerDashboardComponent},
  { path: "mechanic", component: MechanicDashboardComponent},
  { path: "admin", component: AdministratorDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
