import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contract} from '../contract.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ContractServiceService {

    constructor(private http: HttpClient) {
    }

    public getContract(): Observable<Contract[]> {
        return this.http.get<Contract[]>('http://localhost:8000/api/contracts');
    }
}
