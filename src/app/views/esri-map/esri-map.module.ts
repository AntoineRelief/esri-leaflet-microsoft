import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsriMapComponent } from './esri-map.component';
import { MapModule } from 'src/app/components/map/map.module';
import { EsriMapRoutingModule } from './esri-map-routing.module';



@NgModule({
  declarations: [
    EsriMapComponent
  ],
  imports: [
    CommonModule,
    MapModule,
    EsriMapRoutingModule
  ]
})
export class EsriMapModule { }
