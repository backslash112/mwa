import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {

  @Input() visibility: boolean;
  constructor(private e: ElementRef, private r: Renderer) { 
    
  }

  ngOnInit() {
    this.e.nativeElement.style.visibility = this.visibility ? "visible" : "hidden";
  }


}
