import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'map',
    loadChildren: () =>
      import('./views/esri-map/esri-map.module').then((m) => m.EsriMapModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./views/esri-auth/esri-auth.module').then((m) => m.EsriAuthModule),
  },
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
