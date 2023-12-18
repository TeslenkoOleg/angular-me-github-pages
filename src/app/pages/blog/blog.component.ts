import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TypeEffectComponent} from "../../feature/type-effect/type-effect.component";
import {IText, TextContainerLayoutComponent} from "../../feature/text-container-layout/text-container-layout.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, TypeEffectComponent, TextContainerLayoutComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  public tableHeaders = [
    {
      title: 'id',
      class: 'id',
    },
    {
      title: 'title',
      class: 'title',
    },
    {
      title: 'url',
      class: 'url',
    },
  ];
  public articles = [
    {
      id: 1,
      title: 'Best Design Principles in Angular',
      url: 'https://medium.com/p/bc8189ee0193',
    },
    {
      id: 2,
      title: 'Automatic Application Deployment Using Bitbucket Pipelines',
      url: 'https://medium.com/gitconnected/automatic-application-deployment-using-bitbucket-pipelines-9fa8680e4371',
    },
    {
      id: 3,
      title: 'Stop Using Slack for Sensitive Information',
      url: 'https://medium.com/gitconnected/stop-using-slack-for-sensitive-information-ae91b9f1769b',
    },
    {
      id: 4,
      title: 'How to Integrate Third-Party SDK into Angular App',
      url: 'https://medium.com/p/da34d03c9d98',
    },
    {
      id: 5,
      title: 'Fade in(out) Animations in Angular image',
      url: 'https://medium.com/p/31a80949cd2e',
    },
    {
      id: 6,
      title: 'Memory Leak in Node.js Apps',
      url: 'https://medium.com/towardsdev/ram-in-node-memory-leak-5cfca356ddcc',
    },
    {
      id: 7,
      title: 'Mobile App using JavaScript / Angular',
      url: 'https://medium.com/@teslenkooleg2017/angular-mobile-app-by-cordova-c4864463c49',
    },
  ];
  public textArray: IText[] = [
    {
      text: 'SELECT * FROM articles LIMIT ' + this.articles.length + ';',
      id: 1,
      prefix: 'oleh@teslenko> '
    }
  ];
  public showTable = false;
  onTypingEnd(textId: number) {
    this.showTable = true;
  }
}
