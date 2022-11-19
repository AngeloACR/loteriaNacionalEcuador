import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ selector: '[positioning]' })
export class PositioningDirective {
  @HostListener('window:message', ['$event'])
  handleScroll(e: any) {
    console.log(    this.el.nativeElement.offsetHeight);
    let position =
      e.data.screen -
        90 -
        this.el.nativeElement.offsetHeight/2 +
        e.data.top >
      e.target.innerHeight -
        90 -
        this.el.nativeElement.offsetHeight/2
        ? e.target.innerHeight -
          90 -
          this.el.nativeElement.offsetHeight/2
        : e.data.screen -
          90 -
          this.el.nativeElement.offsetHeight/2 +
          e.data.top;
    this.renderer.setStyle(this.el.nativeElement, 'top', `${position}px`);
  }
  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
