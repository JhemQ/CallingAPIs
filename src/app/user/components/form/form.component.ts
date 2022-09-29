import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userForm: FormGroup

  constructor(private fb:FormBuilder) { 
    this.userForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      name: ['', Validators.required],
      bio: ['', Validators.required],
      active: ['', Validators.required]
    });
  }
  
  ngOnInit(): void {
    
  }

  submit(form : FormGroup){
    console.log('email', form.value.email);
    console.log('name', form.value.name);
    console.log('bio', form.value.bio);
    console.log('active', form.value.active);
    alert("No implementation yet");
    form.reset();
  }

  get email(){
    return this.userForm.get('email');
  }
  get name(){
    return this.userForm.get('name');
  }
  get bio(){
    return this.userForm.get('bio');
  }
  get active(){
    return this.userForm.get('active');
  }

}
