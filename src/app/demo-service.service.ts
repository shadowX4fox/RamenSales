import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RamenSaleData } from './ramen-sale-data';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DemoServiceService {

  constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    getSalesData() {
        return this.http.get<RamenSaleData>('https://salesdatafunction.azurewebsites.net/api/FunctionBarCharData?id=ramen::sales');
    }
}
