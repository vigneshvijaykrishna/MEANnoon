import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ef:ElementRef) { 
    console.log("MODULE",ef)
    ef.nativeElement.style.backgroundColor="aqua"
  }

}
