import {Component, OnInit} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.sass']
})
export class WelcomePageComponent implements OnInit {
  auth = false;

  constructor(private keycloakservice: KeycloakService) {
  }

  async ngOnInit() {
    this.auth = await this.keycloakservice.isLoggedIn();
  }
}
