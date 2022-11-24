import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({ selector: '[]' })
export class PositioningDirective {
  @Input() public offset: number;
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
    position = position > 0 ? position : 0;
    console.log(position);
    console.log(this.offset);
    this.renderer.setStyle(this.el.nativeElement, 'top', `${position}px`);
    this.renderer.setStyle(this.el.nativeElement, 'max-height', `${e.data.screen}px`);
  }
  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
