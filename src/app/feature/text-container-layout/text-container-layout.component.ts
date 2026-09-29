import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TypeEffectComponent} from "../type-effect/type-effect.component";

export interface IText {
  text: string;
  prefix: string;
  // when set, the line becomes a link once it has finished typing
  link?: string;
}
@Component({
  selector: 'app-text-container-layout',
  standalone: true,
  imports: [CommonModule, TypeEffectComponent],
  templateUrl: './text-container-layout.component.html',
  styleUrls: ['./text-container-layout.component.scss']
})
export class TextContainerLayoutComponent {
  @Input() textArray: IText[] = [];
  // number of lines that finished typing; line with this index is the one being typed
  typedCount = 0;
  @Output() typingEnd: EventEmitter<number> = new EventEmitter<number>();
  onTypingEnd(index: number) {
    this.typedCount = index + 1;
    this.typingEnd.emit(index);
  }

  // show all remaining lines at once
  @HostListener('document:keydown.enter')
  @HostListener('document:keydown.escape')
  skip() {
    for (let i = this.typedCount; i < this.textArray.length; i++) {
      this.onTypingEnd(i);
    }
  }
}
