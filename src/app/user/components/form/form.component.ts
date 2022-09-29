import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userForm: FormGroup

  constructor(private fb:FormBuilder) { 
    this.userForm = this.fb.group({
      email: '',
      name: '',
      bio: '',
      active: ''
    });
  }
  
  ngOnInit(): void {
    
  }

  submit(form : FormGroup){
    console.log('email', form.value.email);
    console.log('name', form.value.name);
    console.log('bio', form.value.bio);
    console.log('active', form.value.active);
  }

}
