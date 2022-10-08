import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appDirectiveTitle]'
})
export class DirectiveTitleDirective {
  
  
  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elemento.nativeElement, 'font-size', '20px');
  }
}
