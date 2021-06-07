import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{AddAuthorsComponent} from './components/add-authors/add-authors.component';
import{ListbookauthorComponent} from './components/listbookauthor/listbookauthor.component';


const routes: Routes = [
  { path: 'addauthors', component:AddAuthorsComponent},
  { path: 'listbookauthor', component:ListbookauthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
