import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private customerService: CustomersService,private route: ActivatedRoute,
    private router: Router) { }

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
        this.router.navigate(['/listcustomer']);
      },

      error =>{
        console.log(error);
        alert("Nie podałeś wszystkich danych");
      }
    );
  }
}
