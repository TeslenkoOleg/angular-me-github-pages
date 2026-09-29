import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-type-effect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './type-effect.component.html',
  styleUrls: ['./type-effect.component.scss']
})
export class TypeEffectComponent implements OnInit, OnDestroy {
  @Input() text = '';
  currentText = '';
  @Input() public speed: number = 55; // Adjust the typing speed (milliseconds)
  private lineBreakDelay: number = 500; // Adjust the delay between line breaks (milliseconds)
  public terminalCursorClass = 'terminal-cursor';
  @Output() public typingEnd: EventEmitter<void> = new EventEmitter<void>();
  private destroyed = false;
  private timeoutId?: ReturnType<typeof setTimeout>;

  async ngOnInit(){
    await this.typeText();
  }

  ngOnDestroy() {
    this.destroyed = true;
    clearTimeout(this.timeoutId);
  }

  async typeText() {
    for (let i = 0; i < this.text.length; i++) {
      this.currentText += this.text[i];
      if (this.text[i] === '\n') {
        await this.timeout(this.lineBreakDelay);
      }
      await this.timeout(this.speed);
      if (this.destroyed) {
        return;
      }
    }
    this.terminalCursorClass = '';
    this.typingEnd.emit();
  }

  private timeout(ms: number) {
    return new Promise<void>(resolve => this.timeoutId = setTimeout(resolve, ms));
  }

}
