import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { BookModel } from '../book-form/BookModel';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {

  bookForm: FormGroup
  writters: FormArray

  book:any
  bookObject : BookModel = new BookModel()

  constructor(private fb:FormBuilder, private api : BookService, 
    private route:ActivatedRoute, private router:Router) { 
    this.bookForm = this.fb.group({
      name: ['', Validators.required],
      authors: ['', Validators.required],
      isbn: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.required]]
    });
    this.writters = this.bookForm.get('authors') as FormArray
  
  }

  ngOnInit(): void {
    this.book = this.route.snapshot.params;
    this.bookObject.id = this.book.id
    this.bookForm.controls['name'].setValue(this.book.name)
    this.bookForm.controls['authors'].setValue(this.book.authors)
    this.bookForm.controls['isbn'].setValue(this.book.isbn)
  }

  get name(){
    return this.bookForm.get('name');
  }

  get isbn(){
    return this.bookForm.get('isbn');
  }

  get authors(){
    return this.bookForm.get('authors');
  }

  updateBookDetails(){
    this.bookObject.name = this.bookForm.value.name;
    this.bookObject.authors = this.bookForm.value.authors;
    this.bookObject.isbn = this.bookForm.value.isbn;

    this.api.updateBook(this.bookObject, this.bookObject.id)
    .subscribe(res=>{
      alert("Successfully updated a book");
      this.bookForm.reset()
      this.router.navigate(['book'])
    },
    err=>{
      alert("Something went wrong");
    })
  }

}
