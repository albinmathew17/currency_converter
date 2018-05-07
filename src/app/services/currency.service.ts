import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency } from './../models/currency';
import { Observable } from 'rxjs/Observable';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class CurrencyService {

  constructor(private http: Http) { }
  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  getExchangeRate(base:string,symbols:string): Observable<Currency[]>{
    let apiUrl = 'https://api.fixer.io/latest?base='+base+'&symbols='+symbols;
    return this.http.get(apiUrl)
    // ...and calling .json() on the response to return data
    .map(this.extractData)
    //...errors if any
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
