import {Directive, ElementRef, Input, Renderer2, OnInit, ViewContainerRef, inject, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appCursorBlink]',
  standalone: true,
})
export class CursorBlinkEffectDirective implements OnInit {
  private speed: number = 50; // Adjust the typing speed (milliseconds)
  //private cursor: string = '_';
  private cursorBlinkSpeed: number = 500; // Adjust the blinking speed (milliseconds)
  private lineBreakDelay: number = 800; // Adjust the delay between line breaks (milliseconds)
  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.init();
  }

  private init(): void {
    let showCursor = true;

    setInterval(() => {
      // const currentText = this.el.nativeElement.textContent;
      // console.log('currentText - ', currentText);

      if (showCursor) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        showCursor = false;
      } else {
        this.viewContainer.clear();
        showCursor = true;
      }
    }, this.cursorBlinkSpeed); // Adjust the delay as needed
  }
}

