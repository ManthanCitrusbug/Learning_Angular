import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Books } from '../books/books.component';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent {
@Input() book: Books = {} as Books;
@Output() getBookData = new EventEmitter<Books>()
}
