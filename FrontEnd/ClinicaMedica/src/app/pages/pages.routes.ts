import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from './page.component';
import { AuthGuard } from '../services/auth.guard';


const pagesRoutes:Routes=[
    {
        path: '',
        component: PageComponent,
        canActivate:[AuthGuard],
        children:[
          { path: 'dashboard', component: DashboardComponent},
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
      },
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);