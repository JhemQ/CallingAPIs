import { Injectable } from '@angular/core';
import { BookInterface } from '../models/book-interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: BookInterface[] = [
    {
      id: 1,
      name: "Invisible Man",
      authors: ["Rizal", "William", "Shakespeare"],
      isbn: "1234456092"
    },
    {
      id: 2,
      name: "Harry Potter",
      authors: ["Agatha", "Faith", "Christine"],
      isbn: "74409202X"
    },
    {
      id: 3,
      name: "lord of the rings",
      authors: ["Chou", "Esmeralda", "John"],
      isbn: "098765151A"
    }
  ]

  constructor() { }

  getBooks(){
    return this.books;
  }
}
