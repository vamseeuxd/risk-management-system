import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SoftwareRiskPage } from './software-risk';
import { SoftwareRiskRoutingModule } from './software-risk-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SoftwareRiskRoutingModule
    ],
    declarations: [SoftwareRiskPage],
    bootstrap: [SoftwareRiskPage]
})
export class SoftwareRiskModule {}
