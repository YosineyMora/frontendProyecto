import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarServiciosPageRoutingModule } from './mostrar-servicios-routing.module';

import { MostrarServiciosPage } from './mostrar-servicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarServiciosPageRoutingModule
  ],
  declarations: [MostrarServiciosPage]
})
export class MostrarServiciosPageModule {}
