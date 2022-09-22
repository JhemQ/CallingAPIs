import { Component, OnInit } from '@angular/core';
import { BookInterface } from '../../models/book-interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  writters1:string[] = ["edgar", "jesi", "tin"]
  writters2:string[] = ["faith", "ian", "abby"]
  books: BookInterface[] = [
    {
      id: 1,
      name: "jhem",
      authors: this.writters1,
      isbn: "1234456092"
    },
    {
      id: 2,
      name: "cutieee",
      authors: this.writters2,
      isbn: "74409202X"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
