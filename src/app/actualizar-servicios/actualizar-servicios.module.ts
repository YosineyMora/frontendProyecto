import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarServiciosPageRoutingModule } from './actualizar-servicios-routing.module';

import { ActualizarServiciosPage } from './actualizar-servicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarServiciosPageRoutingModule
  ],
  declarations: [ActualizarServiciosPage]
})
export class ActualizarServiciosPageModule {}
