import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuExample } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuExample
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
