import {Injectable} from '@angular/core';
import {Contract} from '../contract.model';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DiensteService {

    constructor(private http: HttpClient) {
    }

    get() {
        return this.http.get('http://localhost:8000/api/dienst/all');
    }

    post(model) {
        return this.http.post(
            'http://localhost:8080/api/dienst',
            model, ).subscribe((res: HttpResponse<any>) => (console.log('succesful')),

            (res: HttpErrorResponse) => console.log('error'));

    }
}
