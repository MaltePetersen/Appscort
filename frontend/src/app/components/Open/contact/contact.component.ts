import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {EmailContent} from '../../../domain/EmailContent';
import {EmailServiceService} from '../../../services/email-service.service';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
    toEmail: string;
    subject: string;
    message: string;
    email: EmailContent;
    constructor(private emailService: EmailServiceService, private http: HttpClient) {
    }

    ngOnInit() {
        this.email = new EmailContent();
    }

    onSubmit() {
    this.email = new EmailContent();
    this.email.message = this.message;
    this.email.subject = this.subject;
    this.email.toEmail = this.toEmail;
    this.post(this.email).subscribe((res: HttpResponse<any>) => (console.log('succesful')),
        (res: HttpErrorResponse) => console.log('error'));
   // this.emailService.post(this.email).subscribe((res: HttpResponse<any>) => (console.log('succesful')),
     //   (res: HttpErrorResponse) => console.log('error'));
    }
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
