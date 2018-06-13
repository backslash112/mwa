import { Directive, Input, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {

  @Input() visibility: boolean;
  @HostBinding("style.visibility") vis;
  constructor(private e: ElementRef, private r: Renderer) { 
    
  }

  ngOnInit() {
    // this.e.nativeElement.style.visibility = this.visibility ? "visible" : "hidden";
    
    // another solution use HostBinding like this:
    this.vis = this.visibility ? "visible" : "hidden";
  }


}
