import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormComponent } from './components/form/form.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    ProfileComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProfileComponent,
    FormComponent
  ]
})

export class UserModule { }
