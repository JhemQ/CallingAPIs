import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from './blog/pages/blog-form/blog-form.component';
import { BlogListComponent } from './blog/pages/blog-list/blog-list.component';
import { BookFormComponent } from './book/pages/book-form/book-form.component';
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
  },
  {
    path: "book/form",
    component: BookFormComponent
  },
  {
    path: "blog/form",
    component: BlogFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
