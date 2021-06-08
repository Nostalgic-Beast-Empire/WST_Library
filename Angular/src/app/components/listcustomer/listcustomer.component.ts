import { Component, OnInit } from '@angular/core';
import {Customer} from 'src/app/models/customers';
import {CustomersService} from 'src/app/services/customers.service';

@Component({
  selector: 'app-listcustomer',
  templateUrl: './listcustomer.component.html',
  styleUrls: ['./listcustomer.component.css']
})
export class ListcustomerComponent implements OnInit {
  customers: any=[];

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.getCustomers();
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
