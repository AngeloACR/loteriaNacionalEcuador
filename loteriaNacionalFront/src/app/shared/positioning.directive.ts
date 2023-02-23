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
  @Input() public offset: number = 0;
  @HostListener('window:message', ['$event'])
  handleScroll(e: any) {
    let iframeOffset = 0.2 * e.target.innerWidth;
    let itemOffset = this.el.nativeElement.offsetHeight / 2;
    /*     let data = e.data.top ? e.data.top + e.data.screen : this.offset;
    let totalOffset =
      150 + this.offset + this.el.nativeElement.offsetHeight / 2;
    let position = Math.min(
      Math.abs(data - totalOffset),
      Math.abs(e.target.innerHeight - totalOffset)
    ); */
    let position = 0;
    if (e.data.top) {
      position = e.data.top;
      //position = e.data.screen / 2 + e.data.top - itemOffset; //- iframeOffset - itemOffset;
    } else {
      position = 0;
      //position = 1080 / 2 - itemOffset; //- Math.abs(iframeOffset) - itemOffset;
    }
    position = position > 0 ? position : 0;
    position = 50;
    this.renderer.setStyle(this.el.nativeElement, 'top', `${position}px`);
    /*     this.renderer.setStyle(
      this.el.nativeElement,
      'max-height',
      `${e.data.screen}px`
    ); */
  }
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}
}
