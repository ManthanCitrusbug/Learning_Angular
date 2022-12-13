import { Component } from '@angular/core';

export interface Books { 
  bookname: string,
  auther: string,
  image_src: string,
  price: number,
  imageDisplay: boolean,
}


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


export class BooksComponent {

  cart: Books[] = []

  books: Books[] = [
    {
      bookname: "Introduction to Algorithms",
      auther: "Thomas H. Cormen",
      image_src: "https://cdn.hackr.io/uploads/posts/attachments/introduction-to-algorithms-eastern-economy-edition.jpg",
      price: 700,
      imageDisplay: true,
    },
    {
      bookname: "The Clean Coder",
      auther: "Robert C. Martin",
      image_src: "https://cdn.hackr.io/uploads/posts/attachments/the-clean-coder.jpg",
      price: 950,
      imageDisplay: true,
    }
  ]

  getBook(book:Books){
    // this.cart = this.cart.filter(book=>book.bookname!=book.bookname)
    this.cart.push(book)
  }
  // bookname: string = "Introduction to Algorithms";
  // auther: string = "Thomas H. Cormen"
  // image_src: string = "https://cdn.hackr.io/uploads/posts/attachments/introduction-to-algorithms-eastern-economy-edition.jpg"
  // // button: string = "Toggle Book Image"
  // imageDisplay: boolean = true

  // Showimage(imageDisplay:boolean) {
  //   this.imageDisplay = !this.imageDisplay
  //   // if (imageDisplay){
  //   //   this.button = "Hide Book Image"
  //   // } else {
  //   //   this.button = "Show Book Image"
  //   // }
  // }

}
