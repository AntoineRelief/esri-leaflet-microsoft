import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsriMapComponent } from './esri-map.component';

const routes: Routes = [
  {
    path: '',
    component: EsriMapComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsriMapRoutingModule {}
