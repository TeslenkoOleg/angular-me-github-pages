import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {Event, RouterEvent, Router, RouterLink} from '@angular/router';
import {NgForOf} from "@angular/common";
import {filter} from "rxjs";
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: true,
    imports: [MatButtonModule, MatIconModule, MatToolbarModule, RouterLink, NgForOf]
})
export class ToolbarComponent{
  activeTab: string = '/about';

  tabs = [
    {name: '~/about', url: '/about'},
    {name: '~/blog', url: '/blog'},
    {name: '~/contact', url: '/contact'},
  ];
  setActiveTab(tab: string): void {
    if (tab === '/'){
        tab = '/about';
    }
    this.activeTab = tab;
  }
  constructor(public router: Router) {
    router.events.pipe(
      filter((e: Event | RouterEvent): e is RouterEvent => e instanceof RouterEvent)
    ).subscribe((e: RouterEvent) => {
      this.setActiveTab(e.url);
    });
  }
}
