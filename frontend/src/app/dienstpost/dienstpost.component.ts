import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DiensteService} from '../_service/dienste.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {KeycloakService} from 'keycloak-angular';
import {Dienst} from '../domain/dienst';
import * as $ from 'jquery';

@Component({
    selector: 'app-dienstpost',
    templateUrl: './dienstpost.component.html',
    styleUrls: ['./dienstpost.component.sass']
})
export class DienstpostComponent implements OnInit {
    dienst: Dienst;
    inhalt: string;
    heading: string;
    constructor(private dienstPostService: DiensteService, private keycloak: KeycloakService) {
    }

    ngOnInit() {
        this.dienst = new Dienst();
        $('.navbar').addClass('solid');
    }

    onSubmit() {
        this.dienst = new Dienst();
        this.dienst.inhalt = this.inhalt;
        this.dienst.heading = this.heading;
        this.dienstPostService.post(this.dienst).subscribe((res: HttpResponse<any>) => (console.log('succesful')),

            (res: HttpErrorResponse) => console.log('error'));
    }
}
