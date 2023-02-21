import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsriAuthComponent } from './esri-auth.component';
import { EsriAuthRoutingModule } from './esri-auth-routing.module';



@NgModule({
  declarations: [
    EsriAuthComponent
  ],
  imports: [
    CommonModule,
    EsriAuthRoutingModule
  ]
})
export class EsriAuthModule { }
