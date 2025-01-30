import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentRiskPage } from './document-risk';

const routes: Routes = [
  {
    path: '',
    component: DocumentRiskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRiskRoutingModule { }
