import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Customer } from '../models/customers';
const baseUrl='http://localhost:50225/api/Customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(baseUrl);
  }
  getById(id:number){
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(customer: Customer){
    return this.http.post(baseUrl, customer);
  }
  update(id: number, customer: Customer){
    return this.http.put(`${baseUrl}/${id}`, customer);
  }
  deleteById(id:number){
    return this.http.delete(`${baseUrl}/${id}`);
  }

}