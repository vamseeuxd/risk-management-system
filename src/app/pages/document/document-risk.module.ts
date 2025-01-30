import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DocumentRiskPage } from './document-risk';
import { DocumentRiskRoutingModule } from './document-risk-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DocumentRiskRoutingModule
    ],
    declarations: [DocumentRiskPage],
    bootstrap: [DocumentRiskPage]
})
export class DocumentRiskModule {}
