import {Component, OnInit} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Component({
    selector: 'app-navbar-logged-in',
    templateUrl: './navbar-logged-in.component.html',
    styleUrls: ['./navbar-logged-in.component.sass']
})
export class NavbarLoggedInComponent implements OnInit {

    auth = false;

    constructor(private keycloakService: KeycloakService) {
    }

    login() {
        this.keycloakService.login();
    }

    logout() {
        this.keycloakService.logout();
    }

    async ngOnInit() {
        this.auth = await this.keycloakService.isLoggedIn();

    }

}
