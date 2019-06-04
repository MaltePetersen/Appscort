import {Component, OnInit} from '@angular/core';
import {DiensteService} from '../_service/dienste.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {KeycloakService} from 'keycloak-angular';
import {Dienst} from '../domain/dienst';

@Component({
    selector: 'app-dienstpost',
    templateUrl: './dienstpost.component.html',
    styleUrls: ['./dienstpost.component.sass']
})
export class DienstpostComponent implements OnInit {
    dienst: Dienst;
    constructor(private dienstPostService: DiensteService, private keycloak: KeycloakService) {
        this.keycloak.getToken().then(function (value) {
            console.log(value);
        });
    }

    ngOnInit() {
        this.dienst = new Dienst();
        this.dienst.inhalt = 'Martha';
        this.dienstPostService.post(this.dienst).subscribe((res: HttpResponse<any>) => (console.log('succesful')),

            (res: HttpErrorResponse) => console.log('error'));
    }

}
