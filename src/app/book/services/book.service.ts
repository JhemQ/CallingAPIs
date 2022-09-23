import { Injectable } from '@angular/core';
import { BookInterface } from '../models/book-interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  writters1:string[] = ["Rizal", "William", "Shakespeare"]
  writters2:string[] = ["Agatha", "Faith", "Christine"]
  books: BookInterface[] = [
    {
      id: 1,
      name: "Invisible Man",
      authors: this.writters1,
      isbn: "1234456092"
    },
    {
      id: 2,
      name: "Harry Potter",
      authors: this.writters2,
      isbn: "74409202X"
    },
    {
      id: 3,
      name: "lord of the rings",
      authors: this.writters2,
      isbn: "098765151A"
    }
  ]

  constructor() { }

  getBooks(){
    return this.books;
  }
}
