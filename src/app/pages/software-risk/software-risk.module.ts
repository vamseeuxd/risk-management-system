import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SoftwareRiskPage } from './software-risk';
import { PopoverPage } from '../about-popover/about-popover';
import { SoftwareRiskRoutingModule } from './software-risk-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SoftwareRiskRoutingModule
    ],
    declarations: [SoftwareRiskPage, PopoverPage],
    bootstrap: [SoftwareRiskPage]
})
export class SoftwareRiskModule {}
