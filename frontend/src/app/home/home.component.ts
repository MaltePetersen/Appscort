import {Component, OnInit, HostListener} from '@angular/core';
import {trigger, state, style, animate, transition, group} from '@angular/animations';
import {CustomerService} from '../_service/customer.service';
import {Contract} from '../model/contract.model';
import {KeycloakService} from 'keycloak-angular';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass'],
    animations: [
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
                animate('1000ms ease-out',
                    // 'To' Style
                    style({opacity: 1, transform: 'scale(1)'}),
                )
            ]),
            transition('* => void', [
                animate('1000ms ease-in-out',
                    style({
                        opacity: 0.2,
                        transform: 'translateY(130%)'
                    })
                )
            ]),

        ]),
    ]
})
export class HomeComponent implements OnInit {
    getTEst: Contract[];
    auth = false;
    start = false;

    @HostListener('window:scroll', ['$event'])
    bounceIn() {
        const scrollPosition = window.pageYOffset;
        console.log('window.pageYOffset');
        console.log(scrollPosition);

        if (scrollPosition <= 300) {
            this.start = true;
        } else {
            this.start = false;
        }
    }

    constructor(private customerService: CustomerService, private keycloakService: KeycloakService) {
    }

    get() {if (this.auth) {
        return this.customerService.getContracts().subscribe((data) => this.getTEst = data);
    }else return [];
    }

    async ngOnInit() {
        auth = await this.keycloakService.isLoggedIn().then(this.get());
        $(document).ready(function () {
            $(window).scroll(function () {
                $('.arrow').css('opacity', 1 - $(window).scrollTop() / 250);
            });
        });

    }


}
