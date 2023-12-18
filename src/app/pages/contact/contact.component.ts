import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TypeEffectComponent} from "../../feature/type-effect/type-effect.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TypeEffectComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public text = ' > Feel free to contact me if you have any questions or just want to chat:\n\n' +
    '-> Email: ceo@t-slen.com\n\n' +
    '-> LinkedIn: https://www.linkedin.com/in/oleh-teslenko-720443161/\n\n'

}
