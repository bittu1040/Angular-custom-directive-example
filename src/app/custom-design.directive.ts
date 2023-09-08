import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDesign]'
})
export class CustomDesignDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }


  
  // custom hover effect by changing the background color

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log("mouse enter");
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.style.width = '400px';
    this.el.nativeElement.innerHTML= this.el.nativeElement.innerHTML+ "bittu";
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    console.log("mouse leave");
    this.el.nativeElement.style.backgroundColor = '#d156f0';
    this.el.nativeElement.style.width = '300px';
     this.el.nativeElement.innerHTML = this.el.nativeElement.innerHTML.replace('bittu', '');
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#d156f0');
  }

  /*

  observe the location of your mouse event
  @HostListener('mouseenter', ['$event']) 
  onMouseEnter(event: MouseEvent){
    console.log("mouseenter position: ", "X: ", event.pageX,  "Y: ", event.pageY )
  }

  @HostListener('mouseleave', ['$event']) 
  onMouseLeave(event: MouseEvent){
    console.log("mouseout position: ", "X: ", event.pageX,  "Y: ", event.pageY )
  }

  */

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    console.log("mouseDown position: ", "X: ", event.pageX,  "Y: ", event.pageY )
    
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // console.log("mousemove position: ", "X: ", event.pageX,  "Y: ", event.pageY )
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    console.log("mouseUp position: ", "X: ", event.pageX,  "Y: ", event.pageY )
  }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = 'lightblue';
  }


}
