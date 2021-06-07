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
    this.getAuthors();
  }

  getAuthors(){
    this.authorService.getAll()
      .subscribe(
        data =>{
         
          this.authors = data as Author[];
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
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



}

