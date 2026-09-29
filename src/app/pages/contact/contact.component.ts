import { Component } from '@angular/core';
import {IText, TextContainerLayoutComponent} from "../../feature/text-container-layout/text-container-layout.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TextContainerLayoutComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public textArray: IText[] = [
    {
      text: 'Feel free to contact me if you have any questions or just want to chat:',
      prefix: 'oleh@teslenko> '
    },
    {
      text: 'Email: ceo@t-slen.com',
      prefix: '-> ',
      link: 'mailto:ceo@t-slen.com'
    },
    {
      text: 'LinkedIn: https://www.linkedin.com/in/oleh-teslenko-720443161',
      prefix: '-> ',
      link: 'https://www.linkedin.com/in/oleh-teslenko-720443161'
    }
  ];

}
