import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { BlogModule } from './blog/blog.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    UserModule,
    BrowserModule,
    AppRoutingModule,
    BookModule,
    BlogModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
