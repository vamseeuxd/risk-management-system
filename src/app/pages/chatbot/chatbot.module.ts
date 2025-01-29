import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ChatbotPage } from './chatbot';
import { ChatbotPageRoutingModule } from './chatbot-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ChatbotPageRoutingModule
  ],
  declarations: [
    ChatbotPage,
  ]
})
export class ChatbotModule { }
