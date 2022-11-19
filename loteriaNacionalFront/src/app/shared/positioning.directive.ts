import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({ selector: '[positioning]' })
export class PositioningDirective {
  @HostListener('window:message', ['$event'])
  handleScroll(e: any) {
    let position =
      e.data.screen - 200 + e.data.top > e.target.innerHeight - 130
        ? e.target.innerHeight - 130
        : e.data.screen - 200 + e.data.top;
    this.renderer.setStyle(this.el.nativeElement, 'top', `${position}px`);
  }
  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
