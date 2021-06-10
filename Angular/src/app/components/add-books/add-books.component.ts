import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/authors';

import {Book} from 'src/app/models/books';
import { AuthorsService } from 'src/app/services/authors.service';
import {BooksService} from 'src/app/services/books.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  authors: any=[];
  book: Book={


    bookId: 0,
    authorId: 0,
    bookName: '',
    pagecount: 0,


  };
  submitted: boolean = false;

  constructor(private booksService: BooksService,private authorService: AuthorsService) { }

  ngOnInit(): void {
    this.getAuthors();
  }

  saveBook(){
    const buffer: Book = {
      bookId:this.book.bookId,
      authorId:this.book.authorId,
      bookName:this.book.bookName,
      pagecount:this.book.pagecount,  

    };

    this.booksService.create(buffer)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true
      },

  error =>console.log(error)
    );
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
    }
}