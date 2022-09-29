import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(private router:Router, private fb:FormBuilder
    ,private http: HttpClient) { 

      this.registerForm = this.fb.group({
        fullName: [''],
        age: [''],
        email:[''],
        password:['']
      });

  }

  ngOnInit(): void {
  
  }

  submit(){
    this.http.post<any>("http://localhost:3000/registerUser", this.registerForm.value)
    .subscribe(res=>{
      alert("Registered Successfully");
      this.registerForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Something went wrong")
    })
  }

  redirectToLogin(){
    this.router.navigate(['login']);
  }

}
