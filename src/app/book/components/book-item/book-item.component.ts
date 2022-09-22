import { Component, OnInit } from '@angular/core';
import { BookInterface } from '../../models/book-interface';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  public books:BookInterface[] = []

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  edit() {
    //to do
  }

  delete() {
    //to do
  }

}
