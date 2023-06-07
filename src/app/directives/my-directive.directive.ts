import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';




@Directive({
  selector: '[borderDir]'
})


export class ImgStyleDirective {


 r1: string = '30px';


 r2: string = '50px';

  constructor(private element: ElementRef) {

  }


  @HostListener('mouseover') func1() {
    this.element.nativeElement.style.transition = "border-radius 1s, boxShadow 1s";
    this.element.nativeElement.style.borderRadius = `${this.r2}`;
    this.element.nativeElement.style.boxShadow = '0 0 10px rgba(0, 0, 0, 1)';

  }

  @HostListener('mouseout') func2() {
    this.element.nativeElement.style.transition = "border-radius 1s, boxShadow 1s";
    this.element.nativeElement.style.borderRadius = `${this.r1}`;
    this.element.nativeElement.style.boxShadow ='none'

  }
}
