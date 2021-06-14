import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import{AddAuthorsComponent} from './components/add-authors/add-authors.component';
import{ListbookauthorComponent} from './components/listbookauthor/listbookauthor.component';
import{ListauthorComponent} from './components/listauthor/listauthor.component';
import{ListcustomerComponent} from './components/listcustomer/listcustomer.component';
import{ListborrowsComponent} from './components/listborrows/listborrows.component';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddBorrowComponent } from './components/add-borrow/add-borrow.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'addauthors', component:AddAuthorsComponent},
  { path: 'addbook', component:AddBooksComponent},
  { path: 'addborrow', component:AddBorrowComponent},
  { path: 'addcustomer', component:AddCustomerComponent},
  { path: 'listbookauthor', component:ListbookauthorComponent},
  { path: 'listauthor', component:ListauthorComponent},
  { path: 'listcustomer', component:ListcustomerComponent},
  { path: 'listborrow', component:ListborrowsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
