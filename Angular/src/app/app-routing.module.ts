import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{AddAuthorsComponent} from './components/add-authors/add-authors.component';
import{ListbookauthorComponent} from './components/listbookauthor/listbookauthor.component';
import{ListauthorComponent} from './components/listauthor/listauthor.component';
import{ListcustomerComponent} from './components/listcustomer/listcustomer.component';
import{ListborrowsComponent} from './components/listborrows/listborrows.component';


const routes: Routes = [
  { path: 'addauthors', component:AddAuthorsComponent},
  { path: 'listbookauthor', component:ListbookauthorComponent},
  { path: 'listauthor', component:ListauthorComponent},
  { path: 'listcustomer', component:ListcustomerComponent},
  { path: 'listborrow', component:ListborrowsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
