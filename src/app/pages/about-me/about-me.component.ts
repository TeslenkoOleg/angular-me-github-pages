import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CursorBlinkEffectDirective} from "../../directive/cursor-blink-effect.directive";
import {TypeEffectComponent} from "../../feature/type-effect/type-effect.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, CursorBlinkEffectDirective, TypeEffectComponent],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent{
  public text =
    ' > Hi, my name is Oleh.\n\n' +
    '-> I have been passionate about programming all my life.\n\n' +
    '-> I started my journey with web development - Javascript, PHP, HTML, CSS.\n\n' +
    '-> If I\'m honest, I didn\'t like it at first, and my heart leaned towards the backend for a long time, especially with Node.js.\n\n' +
    '-> I\'ve worked on high-load projects, built various services, APIs, and designed database infrastructures - MySQL, MongoDB, Postgres, Clickhouse, Aerospike, Kafka.\n\n' +
    '-> In 2020, I delved into frontend development - specifically Angular, and I instantly fell in love with this framework.\n\n' +
    '-> Now, I\'m thriving as a full-stack software engineer and team lead at a digital advertising company, bringing my passion for coding into every project.\n\n' +
    '-> I\'m also a big fan of open-source projects, and I\'m always looking for new opportunities to contribute to them.\n\n' +
    '-> I would love to share my experiences with everyone, so I started writing a blog about the things I\'ve learned along the way.\n\n' +
    '-> One of my hobbies is playing volleyball. I enjoy participating in the game, watching matches, and engaging in discussions about volleyball.'
}
