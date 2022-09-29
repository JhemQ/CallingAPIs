import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { SharedModule } from '../shared/shared.module';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateBlogComponent } from './pages/update-blog/update-blog.component';

@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent,
    BlogFormComponent,
    UpdateBlogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    BlogListComponent,
    BlogItemComponent
  ]
})
export class BlogModule { }
