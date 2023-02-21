import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArcGISIdentityManager } from '@esri/arcgis-rest-request';

const clientId = 'QFhxwOQsnlECoZwE';

const redirectUri = 'http://localhost:4200/auth';

@Component({
  selector: 'app-esri-auth',
  templateUrl: './esri-auth.component.html',
  styleUrls: ['./esri-auth.component.scss']
})
export class EsriAuthComponent implements OnInit {

  constructor(private router: Router) {} 

  ngOnInit(): void {
    ArcGISIdentityManager.completeOAuth2({
      clientId,
      redirectUri,
    }).then((session) => {
      if (session) {
        localStorage.setItem('arcgis_session', session.serialize());
        this.router.navigate(['./map']);
      }
    });
  }
}
