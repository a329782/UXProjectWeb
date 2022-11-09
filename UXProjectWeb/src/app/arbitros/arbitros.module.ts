import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArbitrosPageRoutingModule } from './arbitros-routing.module';

import { ArbitrosPage } from './arbitros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArbitrosPageRoutingModule
  ],
  declarations: [ArbitrosPage]
})
export class ArbitrosPageModule {}
