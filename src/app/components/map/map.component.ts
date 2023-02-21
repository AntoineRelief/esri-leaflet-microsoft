import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArcGISIdentityManager } from '@esri/arcgis-rest-request';

declare const L: any;

const clientId = 'QFhxwOQsnlECoZwE';

const redirectUri = 'http://localhost:4200/auth';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  public session: any = null;
  private map: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    const serializedSession = localStorage.getItem('arcgis_session');
    if (serializedSession !== null && serializedSession !== 'undefined') {
      const session = ArcGISIdentityManager.deserialize(serializedSession);
      if (session) {
        this.session = session;
        L.esri.Vector.vectorBasemapLayer('ArcGIS:Streets', {
          token: session.token,
        }).addTo(this.map);
        const featureLayer = L.esri.featureLayer({
          url: 'https://services7.arcgis.com/3tuQioTtLzdXxk0s/arcgis/rest/services/ne_50m_populated_places/FeatureServer/0',
          token: session.token,
          // url: 'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0',
        });
        https://services7.arcgis.com/3tuQioTtLzdXxk0s/arcgis/rest/services/ne_50m_populated_places/FeatureServer
        featureLayer.addTo(this.map);
      }
    }
  }

  public beginSession(event: any): void {
    event.preventDefault();
    ArcGISIdentityManager.beginOAuth2({
      clientId,
      redirectUri,
      popup: false,
    })
      ?.then((session) => {
        console.log(session);
      })
      .catch((error) => console.log(error));
  }

  public endSession(event: any): void {
    event.preventDefault();
    this.session.signOut().then(() => {
      this.session = null;
      localStorage.removeItem('arcgis_session');
      location.reload();
    });
  }
}
