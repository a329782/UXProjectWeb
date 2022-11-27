import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroDeArbitrosPageRoutingModule } from './registro-de-arbitros-routing.module';

import { RegistroDeArbitrosPage } from './registro-de-arbitros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroDeArbitrosPageRoutingModule
  ],
  declarations: [RegistroDeArbitrosPage]
})
export class RegistroDeArbitrosPageModule {}
