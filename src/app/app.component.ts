import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'esri-microsoft';

  constructor(private oauthService: OAuthService) {}

  ngOnInit(): void {
    this.oauthService.events.subscribe((event: any) => {
      console.log(event);
    });
    this.oauthService.loadDiscoveryDocumentAndLogin().then(async () => {
      const token = sessionStorage.getItem('access_token');
      console.log(token);
    });
  }
}
