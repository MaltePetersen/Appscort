import {Injectable} from '@angular/core';
import {Contract} from '../contract.model';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {KeycloakService} from 'keycloak-angular';


@Injectable({
    providedIn: 'root'
})

export class DiensteService {

    constructor(private http: HttpClient, private keycloak: KeycloakService) {
    }

    get() {
        return this.http.get('http://localhost:8000/api/dienst/all');
    }


    post(model) {
        let headers = new HttpHeaders();
        headers.append('Content-type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.put(
            'http://localhost:8080/api/dienst',
            model, {
                headers, observe: 'response'

            });


    }
}
