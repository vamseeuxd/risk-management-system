import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatbotPage } from './chatbot';

const routes: Routes = [
  {
    path: '',
    component: ChatbotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatbotPageRoutingModule { }
