import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  allBooks: any

  constructor(private api : BookService, private router: Router,
     private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  editBook(row : any){
    this.router.navigate(['/book/update',{id:row.id, name:row.name, authors:row.authors, isbn:row.isbn}]);
    
  }

  deleteBook(id: any){
    this.api.deleteBook(id).subscribe(res=>{
      alert("Book has been deleted");
      this.getAllBooks()
    })
  }

  getAllBooks(){
    this.api.getBook().subscribe(res=>{
      this.allBooks = res
    })
  }

  deleteAll(id:any){
    this.api.deleteBook(id).subscribe(res=>{
      
    });
    setTimeout(function(){
      window.location.reload();
    }, 1000);
    this.getAllBooks();
  }

}
