import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private authorService: AuthorsService,private route: ActivatedRoute,
    private router: Router) { }

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
        this.router.navigate(['/listauthor']);
      },

      error =>{
        console.log(error);
        alert("Nie podałeś wszystkich danych");
      }
    );
  }

  
}
