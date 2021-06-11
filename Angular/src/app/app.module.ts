import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAuthorsComponent } from './components/add-authors/add-authors.component';
import { ListbookauthorComponent } from './components/listbookauthor/listbookauthor.component';
import { ListauthorComponent } from './components/listauthor/listauthor.component';
import { ListcustomerComponent } from './components/listcustomer/listcustomer.component';
import { ListborrowsComponent } from './components/listborrows/listborrows.component';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAuthorsComponent,
    ListbookauthorComponent,
    ListauthorComponent,
    ListcustomerComponent,
    ListborrowsComponent,
    AddBooksComponent,
    AddCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
