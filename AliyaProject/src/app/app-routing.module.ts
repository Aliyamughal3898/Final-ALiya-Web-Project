import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadComponent } from './upload/upload.component';


const routes: Routes = [
  {path: '' , component : HomeComponent},
  {path: 'login' , component : LoginComponent},
  {path: 'join' , component : JoinComponent},
  {path: 'dashboard' , component : DashboardComponent},
  {path: 'upload' , component: UploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
