import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm : FormGroup

  constructor(private router:Router, private fb:FormBuilder,
    private http:HttpClient) { 
    this.loginForm = this.fb.group({
      email:[''],
      password:['']
    })
  }

  ngOnInit(): void {
  }

  login(){
    this.http.get<any>("http://localhost:3000/registerUser")
    .subscribe(res=>{
      const user = res.find((cred:any)=>{
        return cred.email === this.loginForm.value.email &&
        cred.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['blog'])
      }else{
        alert("User not found");
      }
    }, err=>{
      alert("Something went wrong")
    })
  }

  redirectToReg(){
    this.router.navigate(['register']);
  }

}
