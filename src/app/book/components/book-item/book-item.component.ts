import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookInterface } from '../../models/book-interface';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  //public books:BookInterface[] = []

  @Input() book:BookInterface | undefined;
  @Output() bookEmitter = new EventEmitter();

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    //this.books = this.bookService.getBooks();
  }

  editBook(){
    this.bookEmitter.emit(this.book)
  }

  deleteBook(){
    this.bookEmitter.emit(this.book)
  }

}
