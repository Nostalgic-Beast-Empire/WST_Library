import { Component, OnInit } from '@angular/core';
import {Author} from 'src/app/models/authors';
import {AuthorsService} from 'src/app/services/authors.service';

@Component({
  selector: 'app-listauthor',
  templateUrl: './listauthor.component.html',
  styleUrls: ['./listauthor.component.css']
})
export class ListauthorComponent implements OnInit {
  authors: any=[];


  constructor(private authorService: AuthorsService) { }

  ngOnInit(): void {
    this.getAuthors();
  }
  getAuthors(){

    this.authorService.getAll()
    .subscribe(
      data =>{
        this.authors = data as Author[];
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );

   
}

DeleteAuthor(id: number){
  this.authorService.deleteById(id)
  .subscribe(
    response => {
      console.log(response);
      this.getAuthors();
    },
    error => {
      console.log(error);
    });
}

}
