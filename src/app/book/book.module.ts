import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookService } from './services/book.service';


@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookListComponent,
    BookItemComponent
  ],
  providers:[BookService]
})
export class BookModule { }
