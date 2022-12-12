import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BooksComponent } from './books/books.component';
import { AutherComponent } from './auther/auther.component';
import { SingleBookComponent } from './single-book/single-book.component';

@NgModule({
  declarations: [AppComponent, BooksComponent, AutherComponent, SingleBookComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})

export class AppModule { }