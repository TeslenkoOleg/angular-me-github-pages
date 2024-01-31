import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TypeEffectComponent} from "../type-effect/type-effect.component";

export interface IText {
  text: string;
  id: number;
  prefix: string;

}
@Component({
  selector: 'app-text-container-layout',
  standalone: true,
  imports: [CommonModule, TypeEffectComponent],
  templateUrl: './text-container-layout.component.html',
  styleUrls: ['./text-container-layout.component.scss']
})
export class TextContainerLayoutComponent {
  @Input() textArray!: IText[];
  indexesInTypingProcess: number[] = [1];
  @Output() onEndTyping$: EventEmitter<number> = new EventEmitter<number>();
  onEndTyping(id: number) {
    this.indexesInTypingProcess.push(id+1);
    this.onEndTyping$.emit(id);
  }


}
