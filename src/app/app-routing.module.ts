import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UsersComponent } from './pages/users/users.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [
  //rutas hijas//
  {path: '', 
  component: PagesComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'users', component: UsersComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},  //redirecciona automaticamente//
  ]
}, //rutas protegidas//
  
//rutas publicas//
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  
  
  { path: '**', component: NopagefoundComponent},  //redirecciona si no encuentra el sitio//
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
