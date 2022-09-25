import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { SharedModule } from '../shared/shared.module';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent,
    BlogFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    BlogListComponent,
    BlogItemComponent
  ]
})
export class BlogModule { }
