import { Component, OnInit } from '@angular/core';

import {Customer} from 'src/app/models/customers';
import {CustomersService} from 'src/app/services/customers.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer={
    customerName:'',
    customerSurname:'',
    customerBirthdate: '',
    customerId: 0

  };

  constructor(private customerService: CustomersService) { }

  ngOnInit(): void {
  }

  saveCustomer(){
    const buffer: Customer = {
      customerName:this.customer.customerName,
      customerSurname:this.customer.customerSurname,
      customerBirthdate:this.customer.customerBirthdate,
      customerId:this.customer.customerId
    };

    this.customerService.create(buffer)
    .subscribe(
      response => {
        console.log(response);
      },

  error =>console.log(error)
    );
  }
}
