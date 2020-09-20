import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './patient/patient.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page.component';
import { AuthGuard } from '../services/auth.guard';


const pagesRoutes: Routes = [
  {
    path: '',
    component: PageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard', component: DashboardComponent,
        children: [
          { path: 'patients', redirectTo: 'patients/search', pathMatch: 'full' },
          {
            path: 'patients', component: PatientComponent,
            children: [
              { path: 'search', component: SearchPatientComponent },
              { path: 'create', component: CreatePatientComponent }
            ]
          },
          { path: 'home', component: HomeComponent }          
        ]
      },
      { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' }
    ]
  },
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);