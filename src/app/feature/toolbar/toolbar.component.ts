import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgForOf} from "@angular/common";
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgForOf]
})
export class ToolbarComponent{
  tabs = [
    {name: '~/about', url: '/about'},
    {name: '~/projects', url: '/projects'},
    {name: '~/blog', url: '/blog'},
    {name: '~/contact', url: '/contact'},
  ];
}
