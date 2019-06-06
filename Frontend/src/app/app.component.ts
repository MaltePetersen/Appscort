import {Component, HostListener, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition, group} from '@angular/animations';
import * as $ from 'jquery';
import {KeycloakService} from 'keycloak-angular';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
    animations: [

        // DEFAULT STATES
        trigger('leftRight', [
            // :ENTER TRANSITION
            // Transition Styles
            transition('void => *', [
                // 'From' styles
                style({
                    opacity: 0.2,
                    transform: 'translateX(-100vw)'
                }),
                animate('500ms ease',
                    // 'To' Style
                    style({opacity: 1, transform: 'scale(1)'}),
                )
            ]),
            transition('* => void', [
                animate('500ms ease-in-out',
                    style({
                        opacity: 0.2,
                        transform: 'translateX(-100vw)'
                    })
                )
            ]),
        ]),

        trigger('rightLeft', [
            // :ENTER TRANSITION
            // Transition Styles
            transition('void => *', [
                // 'From' styles
                style({
                    opacity: 0.2,
                    transform: 'translateX(+100vw)'
                }),
                animate('500ms ease',
                    // 'To' Style
                    style({opacity: 1, transform: 'scale(1)'}),
                )
            ]),
            transition('* => void', [
                animate('500ms ease-in-out',
                    style({
                        opacity: 0.2,
                        transform: 'translateX(+100vw)'
                    })
                )
            ]),
        ]),

        // DEFAULT STATES
        trigger('enterLeave', [
            // :ENTER TRANSITION
            // Transition Styles
            transition('void => *', [
                // 'From' styles
                style({
                    opacity: 0.2,
                    transform: 'translateY(130%)'
                }),
                animate('500ms ease-out',
                    // 'To' Style
                    style({opacity: 1, transform: 'scale(1)'}),
                )
            ]),
            transition('* => void', [
                animate('500ms ease-in-out',
                    style({
                        opacity: 0.2,
                        transform: 'translateY(130%)'
                    })
                )
            ]),
        ]),
    ],
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


