import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from './blog/pages/blog-form/blog-form.component';
import { BlogListComponent } from './blog/pages/blog-list/blog-list.component';
import { UpdateBlogComponent } from './blog/pages/update-blog/update-blog.component';
import { BookFormComponent } from './book/pages/book-form/book-form.component';
import { BookListComponent } from './book/pages/book-list/book-list.component';
import { UpdateBookComponent } from './book/pages/update-book/update-book.component';
import { FormComponent } from './user/components/form/form.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "blog",
    pathMatch: "full"
  },
  {
    path: "book",
    component:BookListComponent
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
    path: "book/update",
    component: UpdateBookComponent
  }, 
  {
    path: "blog/form",
    component: BlogFormComponent
  },
  {
    path: "blog/update",
    component: UpdateBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
