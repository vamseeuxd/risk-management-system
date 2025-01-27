import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SpeakerListPage } from './speaker-list';
import { SpeakerListPageRoutingModule } from './speaker-list-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
    FormsModule,
    SpeakerListPageRoutingModule
  ],
  declarations: [SpeakerListPage],
})
export class SpeakerListModule {}
