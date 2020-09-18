import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from './page.component';
import { PAGES_ROUTES } from './pages.routes';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports:[
        PAGES_ROUTES,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[
        DashboardComponent,
        PageComponent
    ],
    exports:[
        DashboardComponent
    ]
})

export class PagesModule { }