import { Directive, HostListener, ElementRef, Renderer, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

  colors: Array<string>;
  @Output() selectedColor: EventEmitter<string>;
  constructor(private e: ElementRef, private r: Renderer) { 
    this.colors = ['red', 'blue', 'yellow', 'gray'];
    this.selectedColor = new EventEmitter();
  }
  @HostListener('click') bar(){ 
    const color = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.e.nativeElement.style.color = color;
    this.selectedColor.emit(color);
  } 
}
