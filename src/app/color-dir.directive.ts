import { parseHostBindings } from '@angular/compiler';
import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  Input,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appColorDir]',
})
export class ColorDirDirective implements OnInit {
  constructor(private elemenref: ElementRef, private render: Renderer2) {}

  @Input() color: string;
  @Input() colorout: string;

  @HostBinding('style.background-color') backgroundcolor:string;

  ngOnInit(): void {
    //this.elemenref.nativeElement.style.background = "yellow";
    //this.elemenref.nativeElement.style.fontSize = "25px";

    this.render.setStyle(
      this.elemenref.nativeElement,
      'background-color',
      'yellow'
    );
  }

  @HostListener('mouseenter') mouseenter() {
    // this.render.setStyle(
    //   this.elemenref.nativeElement,
    //   'background-color',
    //   this.color
    // );

    this.backgroundcolor = this.color;
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundcolor = this.colorout;
    // this.render.setStyle(
    //   this.elemenref.nativeElement,
    //   'background-color',
    //   this.colorout
    // );
  }
}
