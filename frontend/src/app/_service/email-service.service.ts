import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor(private http: HttpClient) { }

    post(model) {
        let headers = new HttpHeaders();
        headers.append('Content-type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.post(
            'http://localhost:8000/api/email',
            model, {
                headers, observe: 'response'

            });


    }
}
