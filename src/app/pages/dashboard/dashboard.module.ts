import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from '../../bar-chart/bar-chart.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NgChartsModule,
        DashboardPageRoutingModule
    ],
    declarations: [
        DashboardPage,
        BarChartComponent,
        ScheduleFilterPage
    ]
})
export class DashboardModule { }
