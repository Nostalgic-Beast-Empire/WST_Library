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
  public show:boolean = false;
  Id:number = 0;

  //authors: any=[];
  book: Book={


    bookId: 0,
    authorId: 0,
    bookName: '',
    pagecount: 0,


  };

  constructor(private authorService: AuthorsService,private bookService: BooksService) { }

  ngOnInit(): void {
    this.getBooks();
    this.getAuthors();
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
  toggle(id:number) {
    this.show = !this.show;
    this.Id = id;
    if(!this.show){
      this.Id = 0;
    }
  
  }
  shouldDisable(id:number){
    if(this.Id == 0){
      return false;
    }else if(this.Id != id){
        return true;
    }else {
    return false;    
    }
  
  }
  EditBook() {
    const buffer: Book = {
        bookId:this.Id,
        authorId:this.book.authorId,
        bookName:this.book.bookName,
        pagecount:this.book.pagecount,  
  
      };

    this.bookService.update(this.Id,buffer)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  
        window.location.reload(); 
  }
  }


