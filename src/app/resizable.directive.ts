import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResizable]',
})
export class ResizableDirective {
  private startX: number | any;
  private startWidth: number | any;

  constructor(private el: ElementRef) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.startX = event.pageX;
    this.startWidth = this.el.nativeElement.offsetWidth;
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.startX) {
      const diff = event.pageX - this.startX;
      this.el.nativeElement.style.width = this.startWidth + diff + 'px';
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.startX = undefined;
    this.startWidth = undefined;
  }
}
