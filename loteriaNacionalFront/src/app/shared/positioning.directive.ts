import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({ selector: '[floatingItem]' })
export class PositioningDirective implements OnInit {
  @Input() public offset: number;
  @HostListener('window:message', ['$event'])
  handleScroll(e: any) {
    let data = e.data.top ? e.data.top : 120;
    //this.offset + this.el.nativeElement.offsetHeight / 2;
    let position = Math.min(
      Math.abs(data - this.offset),
      Math.abs(e.target.innerHeight - this.offset)
    );
    position = position > 0 ? position : 0;
    this.renderer.setStyle(this.el.nativeElement, 'top', `${position}px`);
    this.renderer.setStyle(
      this.el.nativeElement,
      'max-height',
      `${e.data.screen}px`
    );
  }
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}
}
