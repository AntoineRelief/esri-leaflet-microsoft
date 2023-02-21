import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsriAuthComponent } from './esri-auth.component';

const routes: Routes = [
  {
    path: '',
    component: EsriAuthComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsriAuthRoutingModule {}
