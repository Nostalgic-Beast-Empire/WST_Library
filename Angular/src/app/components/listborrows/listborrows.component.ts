import { Component, OnInit } from '@angular/core';
import {Borrow} from 'src/app/models/borrows';

import { BorrowsService } from 'src/app/services/borrows.service';
import {BooksService} from 'src/app/services/books.service';
import {CustomersService} from 'src/app/services/customers.service';

import {Book} from 'src/app/models/books';
import {Customer} from 'src/app/models/customers';



@Component({
  selector: 'app-listborrows',
  templateUrl: './listborrows.component.html',
  styleUrls: ['./listborrows.component.css']
})
export class ListborrowsComponent implements OnInit {

  public show:boolean = false;
  public show2:boolean = false;
  Id:number = 0;

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
 
    borrowId:number = 0;
    customerId:number = 0;
    bookId:number = 0;
    takenDate:string = '';
    broughtDate:string = 'Nie oddana';


  constructor(private booksService: BooksService,private customersService: CustomersService, private borrowService: BorrowsService) { }

  ngOnInit(): void {
    this.getCustomers();
    this.getBooks();
    this.getBorrow();
  }

toggle(id:number) {
  this.show = !this.show;
  this.Id = id;
  if(!this.show){
    this.Id = 0;
  }

}
toggle2(id:number,customerId:number,bookId:number,takenDate:string) {
  this.show2 = !this.show2;

  this.Id = id;
  this.borrowId = id;
  this.customerId = customerId;
  this.bookId = bookId;
  this.takenDate = takenDate;

  if(!this.show2){
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
getBorrow(){

  this.borrowService.getAll()
  .subscribe(
    data =>{
      this.borrows = data as Book[];
      console.log(data);
    },
    error => {
      console.log(error);
    }
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
EditBorrow() {
  const buffer: Borrow = {
    borrowId: this.Id,
    customerId: this.borrow.customerId,
    bookId: this.borrow.bookId,
    takenDate: this.borrow.takenDate,
    broughtDate: this.borrow.broughtDate,

  };

  this.borrowService.update(this.Id,buffer)
    .subscribe(
      response => {
        console.log(response);
        window.location.reload(); 
      },
      error => {
        console.log(error);
      });

      
}
broughtBorrow(){

  const buffer: Borrow = {
    borrowId: this.Id,
    customerId: this.customerId,
    bookId: this.bookId,
    takenDate: this.takenDate,
    broughtDate: this.borrow.broughtDate,

  };

  this.borrowService.update(this.Id,buffer)
    .subscribe(
      response => {
        console.log(response);
        window.location.reload();
      },
      error => {
        console.log(error);
      });
          
}
}
