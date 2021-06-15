import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Author } from '../models/authors';
const baseUrl='http://localhost:50225/api/Authors';
@Injectable({
  providedIn: 'root'
})


export class AuthorsService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(baseUrl);
  }
  getById(id:number){
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(author: Author){
    return this.http.post(baseUrl, author);
  }
  update(id: number, author: Author){
    return this.http.put(`${baseUrl}/${id}`, author);
  }
  deleteById(id:number){
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
