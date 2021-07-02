import { Component, OnInit } from '@angular/core';
import { GotService } from 'src/app/services/got.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [GotService]
})
export class BooksComponent implements OnInit {

  allBooks :[];
  constructor(private service : GotService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks () {
    console.log("ikde yet ae")
    this.service.viewAllBooks().subscribe(res =>{
      this.allBooks = res;
    });
  }

}
