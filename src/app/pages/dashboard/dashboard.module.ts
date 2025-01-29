import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { DashboardPageRoutingModule } from './dashboard-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DashboardPageRoutingModule
    ],
    declarations: [
        DashboardPage,
        ScheduleFilterPage
    ]
})
export class DashboardModule { }
