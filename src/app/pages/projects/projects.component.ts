import { Component } from '@angular/core';
import {IText, TextContainerLayoutComponent} from "../../feature/text-container-layout/text-container-layout.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TextContainerLayoutComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  public textArray: IText[] = [
    {
      text: 'ls ~/projects',
      prefix: 'oleh@teslenko> '
    },
    {
      text: 'ip.t-slen.com - IP checker: shows your public IP, resolves a domain to its IP, checks SSL certificates and finds an IP\'s location (Firebase Functions + MaxMind).',
      prefix: '-> ',
      link: 'https://ip.t-slen.com'
    },
    {
      text: 'blog.t-slen.com - my technical blog about Angular, Node.js and web development.',
      prefix: '-> ',
      link: 'https://blog.t-slen.com'
    },
    {
      text: 'crm.t-slen.com - T-Slen Workhub: an open-source, self-hosted CRM and team workspace with tasks, HR, calendars, chat and video meetings (NestJS + Angular).',
      prefix: '-> ',
      link: 'https://crm.t-slen.com'
    },
    {
      text: 'angular-terminal-text-typing - an npm package with an Angular component that types text like a terminal, just like on this site.',
      prefix: '-> ',
      link: 'https://www.npmjs.com/package/angular-terminal-text-typing'
    },
  ];
}
