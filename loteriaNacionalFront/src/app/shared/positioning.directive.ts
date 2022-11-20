import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({ selector: '[positioning]' })
export class PositioningDirective {
  @Input('offset') offset: any;
  @HostListener('window:message', ['$event'])
  handleScroll(e: any) {
    console.log(this.el.nativeElement.offsetHeight);
    let position =
      e.data.screen -
        90 -
        this.offset -
        this.el.nativeElement.offsetHeight / 2 +
        e.data.top >
      e.target.innerHeight -
        90 -
        this.offset -
        this.el.nativeElement.offsetHeight / 2
        ? e.target.innerHeight -
          90 -
          this.offset -
          this.el.nativeElement.offsetHeight / 2
        : e.data.screen -
          90 -
          this.offset -
          this.el.nativeElement.offsetHeight / 2 +
          e.data.top;
    this.renderer.setStyle(this.el.nativeElement, 'top', `${position}px`);
  }
  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
