import { Component, OnInit } from '@angular/core';

import {Author} from 'src/app/models/authors';
import {AuthorsService} from 'src/app/services/authors.service';

import {Book} from 'src/app/models/books';
import {BooksService} from 'src/app/services/books.service';

@Component({
  selector: 'app-listbookauthor',
  templateUrl: './listbookauthor.component.html',
  styleUrls: ['./listbookauthor.component.css']
})
export class ListbookauthorComponent implements OnInit {
  authors: any=[];
  books: any=[];



  constructor(private authorService: AuthorsService,private bookService: BooksService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){

      this.bookService.getAll()
      .subscribe(
        data =>{
          this.books = data as Book[];
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  DeleteBook(id: number){
    this.bookService.deleteById(id)
    .subscribe(
      response => {
        console.log(response);
        this.getBooks();
      },
      error => {
        console.log(error);
      });
  }



}

