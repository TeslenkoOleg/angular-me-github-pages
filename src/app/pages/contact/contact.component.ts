import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TypeEffectComponent} from "../../feature/type-effect/type-effect.component";
import {IText, TextContainerLayoutComponent} from "../../feature/text-container-layout/text-container-layout.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TypeEffectComponent, TextContainerLayoutComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public textArray: IText[] = [
    {
      text: 'Feel free to contact me if you have any questions or just want to chat:',
      id: 1,
      prefix: 'oleh@teslenko> '
    },
    {
      text: 'Email: ceo@t-slen.com',
      id: 2,
      prefix: '-> '
    },
    {
      text: 'LinkedIn: https://www.linkedin.com/in/oleh-teslenko-720443161',
      id: 3,
      prefix: '-> '
    }
  ];

}
