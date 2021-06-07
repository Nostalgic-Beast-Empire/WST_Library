import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Book } from '../models/books';
const baseUrl='http://localhost:50225/api/Books';
@Injectable({
  providedIn: 'root'
})


export class BooksService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(baseUrl);
  }
  getById(id:number){
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(book: Book){
    return this.http.post(baseUrl, book);
  }
  update(id: number, book: Book){
    return this.http.put(`${baseUrl}/${id}`, book);
  }
  deleteById(id:number){
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(){
    return this.http.delete(baseUrl);
  }
  findByName(bookname: string){
    return this.http.get(`${baseUrl}?bookname=${bookname}`);
  }


}
