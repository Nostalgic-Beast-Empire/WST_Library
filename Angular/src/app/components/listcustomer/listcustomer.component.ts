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

  customer: Customer={
    customerName:'',
    customerSurname:'',
    customerBirthdate: '',
    customerId: 0

  };

  public show:boolean = false;
  Id:number = 0;

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
DeleteCustomer(id: number){
  this.customersService.deleteById(id)
  .subscribe(
    response => {
      console.log(response);
      this.getCustomers();
    },
    error => {
      console.log(error);
    });
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
EditCustomer() {
  const buffer: Customer = {
    customerName:this.customer.customerName,
    customerSurname:this.customer.customerSurname,
    customerBirthdate: this.customer.customerBirthdate,
    customerId:this.Id,
  };
  this.customersService.update(this.Id,buffer)
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
