import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarServiciosPage } from './actualizar-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarServiciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarServiciosPageRoutingModule {}
