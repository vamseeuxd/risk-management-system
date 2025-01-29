import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SoftwareRiskPage } from './software-risk';

const routes: Routes = [
  {
    path: '',
    component: SoftwareRiskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareRiskRoutingModule { }
