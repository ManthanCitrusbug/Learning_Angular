import { Component, Input } from '@angular/core';
import { Books } from '../books/books.component';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent {
@Input() book: Books = {} as Books;
}
