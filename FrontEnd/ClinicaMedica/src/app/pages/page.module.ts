import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from './page.component';
import { PAGES_ROUTES } from './pages.routes';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientComponent } from './patient/patient.component';
import { HomeComponent } from './home/home.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';

@NgModule({
    imports:[
        PAGES_ROUTES,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[
        DashboardComponent,
        PageComponent,
        PatientComponent,
        HomeComponent,
        SearchPatientComponent,
        CreatePatientComponent
    ],
    exports:[
        DashboardComponent
    ]
})

export class PagesModule { }