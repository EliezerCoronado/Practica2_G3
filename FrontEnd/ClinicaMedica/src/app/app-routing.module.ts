import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './pages/page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children:[
      { path: 'dashboard', component: DashboardComponent},
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path:'login', component:LoginComponent },
  { path: 'register', component:RegisterComponent},
  { path: '**', component: NopagefoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
