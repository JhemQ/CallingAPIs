import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookService } from './services/book.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BookListComponent,
    BookItemComponent
  ],
  providers:[BookService]
})
export class BookModule { }
