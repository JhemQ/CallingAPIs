import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog/pages/blog-list/blog-list.component';
import { FormComponent } from './user/components/form/form.component';
import { ProfileComponent } from './user/pages/profile/profile.component';

const routes: Routes = [
  {
    path: "book",
    loadChildren: () => import('./book/book.module').then(m => m.BookModule)
  },
  {
    path: "blog",
    component: BlogListComponent
  },
  {
    path: "profile",
    loadChildren: () => import('./user/user.module').then(m => m.UserModule) 
    //component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
