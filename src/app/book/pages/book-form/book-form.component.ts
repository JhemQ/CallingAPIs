import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { BookModel } from './BookModel';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  
  bookForm: FormGroup;
  writters: FormArray
  book:any

  bookObject : BookModel = new BookModel()

  constructor(private fb:FormBuilder, private api : BookService, 
    private route:ActivatedRoute, private router:Router) { 
    this.bookForm = this.fb.group({
      id: '',
      name: ['', Validators.required],
      authors: fb.array([]),
      isbn: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.required]]
    });
    this.writters = this.bookForm.get('authors') as FormArray
  
  }
  
  ngOnInit(): void {
    this.writters.push(new FormControl())
  }

  get name(){
    return this.bookForm.get('name');
  }

  get isbn(){
    return this.bookForm.get('isbn');
  }

  addAuthor(){
    this.writters.push(new FormControl())
  }

  deleteAuthor(i:number){
    this.writters.removeAt(i)
  }

  submit(form: FormGroup){
    console.log('id', form.value.id);
    console.log('name', form.value.name);
    console.log('authors', form.value.authors);
    console.log('isbn', form.value.isbn);
    console.log(this.bookForm.get('name')?.errors)
  }

  postBookDetails(){
    //this.bookObject.id = this.bookForm.value.id;
    this.bookObject.name = this.bookForm.value.name;
    this.bookObject.authors = this.bookForm.value.authors;
    this.bookObject.isbn = this.bookForm.value.isbn;

    this.api.postBook(this.bookObject)
    .subscribe(res=>{
      console.log(res);
      alert("Successfully added a book");
      this.bookForm.reset()
      this.router.navigate(['book'])
    },
    err=>{
      alert("Something went wrong");
    })
  }

}
