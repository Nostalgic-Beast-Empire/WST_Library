import { Component, OnInit } from '@angular/core';
import {Borrow} from 'src/app/models/borrows';
import {BorrowsService} from 'src/app/services/borrows.service';

@Component({
  selector: 'app-listborrows',
  templateUrl: './listborrows.component.html',
  styleUrls: ['./listborrows.component.css']
})
export class ListborrowsComponent implements OnInit {
  borrows: any=[];

  constructor(private borrowsService: BorrowsService) { }

  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers(){

    this.borrowsService.getAll()
    .subscribe(
      data =>{
        this.borrows = data as Borrow[];
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );

   
}

}
