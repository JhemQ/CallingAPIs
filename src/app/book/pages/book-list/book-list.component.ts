import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { BookInterface } from '../../models/book-interface';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public books:BookInterface[] = []
  @Output() bookEmitter = new EventEmitter();
  allBooks: any

  constructor(private bookService: BookService, private api : BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    this.getAllBooks();
  }

  bookAction(book: BookInterface){
    console.log(book)
    console.log(this.bookEmitter.emit(book))
  }

  detailsEmitter(){
    this.bookEmitter.emit()
  }

  getAllBooks(){
    this.api.getBook().subscribe(res=>{
      this.allBooks = res
    })
  }

}
