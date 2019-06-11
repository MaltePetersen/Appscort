import {Component, OnInit, HostListener} from '@angular/core';
import {trigger, state, style, animate, transition, group} from '@angular/animations';
import {ContractServiceService} from '../../../services/contract-service.service';
import {KeycloakService} from 'keycloak-angular';
import {ifTrue} from 'codelyzer/util/function';
import {promise} from 'selenium-webdriver';
import {Contract} from '../../../contract.model';

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

    start = false;
    contracts: Contract[];
    auth = false;


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

    constructor(private contractService: ContractServiceService, private keycloakService: KeycloakService) {
        console.log(this.keycloakService.isLoggedIn());

    }

    get() {
        this.contractService.getContract().subscribe(data => this.contracts = data);
    }

    ngOnInit() {
        this.keycloakService.isLoggedIn().then(function (value) {
            {
                if (value) {
                    console.log("might work1")
                    this.get();
                    this.auth = true;
                    console.log("works");
                }  else {
                console.log("might work2")
                }
            }
        }.bind(this));

        $(document).ready(function () {
            $(window).scroll(function () {
                $('.arrow').css('opacity', 1 - $(window).scrollTop() / 250);
            });
        });

    }

}
