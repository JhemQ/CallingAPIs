import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private fb:FormBuilder) { 
    this.bookForm = this.fb.group({
      id: '29',
      name: '',
      authors: fb.array([]),
      isbn: ''
    });
  }
  
  ngOnInit(): void {

  }

  submit(form: FormGroup){
    console.log('id', form.value.id);
    console.log('name', form.value.name);
    console.log('name', form.value.authors);
    console.log('isbn', form.value.isbn);
  }

}
