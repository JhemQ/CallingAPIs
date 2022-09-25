import { Component, OnInit } from '@angular/core';
import { BookInterface } from '../../models/book-interface';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public books:BookInterface[] = []

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  bookAction(book: BookInterface){
    console.log(book)
  }

}
