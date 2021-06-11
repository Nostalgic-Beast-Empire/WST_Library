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

  Id:number = 0;
  author: Author={
    authorName:'',
    authorSurname:'',
    authorId: 0

  };
  public show:boolean = false;

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

EditAuthor() {
  const buffer: Author = {
    authorName:this.author.authorName,
    authorSurname:this.author.authorSurname,
    authorId:this.Id,
  };
  this.authorService.update(this.Id,buffer)
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
