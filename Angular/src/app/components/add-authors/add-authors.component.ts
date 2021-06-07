import { Component, OnInit } from '@angular/core';

import {Author} from 'src/app/models/authors';
import {AuthorsService} from 'src/app/services/authors.service';

@Component({
  selector: 'app-add-authors',
  templateUrl: './add-authors.component.html',
  styleUrls: ['./add-authors.component.css']
})
export class AddAuthorsComponent implements OnInit {
  author: Author={
    authorName:'',
    authorSurname:'',
    authorId: 0

  };
  submitted: boolean = false;

  constructor(private authorService: AuthorsService) { }

  ngOnInit(): void {
  }

  saveAuthor(){
    const buffer: Author = {
      authorName:this.author.authorName,
      authorSurname:this.author.authorSurname,
      authorId:this.author.authorId,
    };

    this.authorService.create(buffer)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true
      },

  error =>console.log(error)
    );
  }

  newAuthor(){
    this.submitted = false;
    this.author={
      authorName: '',
      authorSurname:'',
      authorId:0
    };

  }
}
