import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CursorBlinkEffectDirective} from "../../directive/cursor-blink-effect.directive";
import {TypeEffectComponent} from "../../feature/type-effect/type-effect.component";
import {IText, TextContainerLayoutComponent} from "../../feature/text-container-layout/text-container-layout.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, CursorBlinkEffectDirective, TypeEffectComponent, TextContainerLayoutComponent],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent{
  textArray: IText[] = [
    {
      text: 'Hi, my name is Oleh.',
      id: 1,
      prefix: 'oleh@teslenko> '
    },
    {
      text: 'I have been passionate about programming all my life.',
      id: 2,
      prefix: '-> '
    },
    {
      text: 'I started my journey with web development - Javascript, PHP, HTML, CSS.',
      id: 3,
      prefix: '-> '
    },
    {
      text: 'If I\'m honest, I didn\'t like it at first, and my heart leaned towards the backend for a long time, especially with Node.js.',
      id: 4,
      prefix: '-> '
    },
    {
      text: 'I\'ve worked on high-load projects, built various services, APIs, and designed database infrastructures - MySQL, MongoDB, Postgres, Clickhouse, Aerospike, Kafka.',
      id: 5,
      prefix: '-> '
    },
    {
      text: 'In 2020, I delved into frontend development - specifically Angular, and I instantly fell in love with this framework.',
      id: 6,
      prefix: '-> '
    },
    {
      text: 'Now, I\'m thriving as a full-stack software engineer and team lead at a digital advertising company, bringing my passion for coding into every project.',
      id: 7,
      prefix: '-> '
    },
    {
      text: 'I\'m also a big fan of open-source projects, and I\'m always looking for new opportunities to contribute to them.',
      id: 8,
      prefix: '-> '
    },
    {
      text: 'I would love to share my experiences with everyone, so I started writing a blog about the things I\'ve learned along the way.',
      id: 9,
      prefix: '-> '
    },
    {
      text: 'One of my hobbies is playing volleyball. I enjoy participating in the game, watching matches, and engaging in discussions about volleyball.',
      id: 10,
      prefix: '-> '
    },
  ]
}
