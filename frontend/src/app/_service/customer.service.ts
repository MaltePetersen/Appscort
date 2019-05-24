import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Contract} from '../model/contract.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(private http: HttpClient) {
  }

  public getContracts(): Observable<any> {
    const url = 'http://localhost:8000/api/contracts';
    return this.http.get(url);
  }
}

