import {Component, HostListener, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition, group} from '@angular/animations';
import * as $ from 'jquery';
import {KeycloakService} from 'keycloak-angular';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
    title = 'Appscort';
    auth = false;

    constructor(private keycloakService: KeycloakService) {
    }

    async ngOnInit() {
        this.auth = await this.keycloakService.isLoggedIn();
    }
}


