import { Injectable } from '@angular/core';
import { BookInterface } from '../models/book-interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {

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
    },
    {
      id: 3,
      name: "quiambao",
      authors: this.writters2,
      isbn: "098765151A"
    }
  ]

  constructor() { }

  getBooks(){
    return this.books;
  }
}
