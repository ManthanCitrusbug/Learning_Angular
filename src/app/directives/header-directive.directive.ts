import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeaderDirective]'
})
export class HeaderDirectiveDirective {

  constructor(private elm: ElementRef) { 
    this.elm.nativeElement.style.color = "blue"
   }
}
