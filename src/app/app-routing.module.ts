import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog/pages/blog-list/blog-list.component';
import { BookListComponent } from './book/pages/book-list/book-list.component';
import { FormComponent } from './user/components/form/form.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "blog",
    pathMatch: "full"
  },
  {
    path: "book",
    component: BookListComponent
  },
  {
    path: "blog",
    component: BlogListComponent
  },
  {
    path: "profile",
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
