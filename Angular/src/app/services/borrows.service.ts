import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Borrow } from '../models/borrows';
const baseUrl='http://localhost:50225/api/Borrows';

@Injectable({
  providedIn: 'root'
})
export class BorrowsService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(baseUrl);
  }
  getById(id:number){
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(borrow: Borrow){
    return this.http.post(baseUrl, borrow);
  }
  update(id: number, borrow: Borrow){
    return this.http.put(`${baseUrl}/${id}`, borrow);
  }
  deleteById(id:number){
    return this.http.delete(`${baseUrl}/${id}`);
  }


}
