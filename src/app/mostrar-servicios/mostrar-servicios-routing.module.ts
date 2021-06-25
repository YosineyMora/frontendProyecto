import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarServiciosPage } from './mostrar-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarServiciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarServiciosPageRoutingModule {}
