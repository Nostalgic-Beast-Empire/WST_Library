import { Component, OnInit } from '@angular/core';

import { BorrowsService } from 'src/app/services/borrows.service';
import {BooksService} from 'src/app/services/books.service';
import {CustomersService} from 'src/app/services/customers.service';

import {Book} from 'src/app/models/books';
import {Borrow} from 'src/app/models/borrows';
import {Customer} from 'src/app/models/customers';

@Component({
  selector: 'app-add-borrow',
  templateUrl: './add-borrow.component.html',
  styleUrls: ['./add-borrow.component.css']
})
export class AddBorrowComponent implements OnInit {

  books: any=[];
  book: Book={
    bookId: 0,
    authorId: 0,
    bookName: '',
    pagecount: 0,
  };

  customers: any=[];
  customer: Customer={
    customerName:'',
    customerSurname:'',
    customerBirthdate: '',
    customerId: 0
  };

  borrows: any=[];
  borrow: Borrow={
    borrowId: 0,
    customerId: 0,
    bookId: 0,
    takenDate: '',
    broughtDate: 'Nie oddana',
  }

  submitted: boolean = false;

  constructor(private booksService: BooksService,private customersService: CustomersService, private borrowService: BorrowsService) { }

  ngOnInit(): void {
    this.getBooks();
    this.getCustomers();
  }
  saveBorrow(){
    const buffer: Borrow = {
      borrowId: this.borrow.borrowId,
      customerId: this.borrow.customerId,
      bookId: this.borrow.bookId,
      takenDate: this.borrow.takenDate,
      broughtDate: this.borrow.broughtDate,

    };

    this.borrowService.create(buffer)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true
      },

  error =>console.log(error)
    );
  }
  getBooks(){

    this.booksService.getAll()
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
getCustomers(){

  this.customersService.getAll()
  .subscribe(
    data =>{
      this.customers = data as Customer[];
      console.log(data);
    },
    error => {
      console.log(error);
    }
  );

}

}