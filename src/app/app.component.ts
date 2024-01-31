import {Component} from '@angular/core';
import {
  NavigationEnd,
  Router
} from "@angular/router";
import {filter} from "rxjs";
import {environment} from "../enviroments/environment";

declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {

    this.grabTheTrackId();

    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      gtag('event', 'page_view', {
        page_path: event.urlAfterRedirects,
      })
    })
  }


  grabTheTrackId(){

    let gaTrackId = environment.googleAnalyticTagId;

    const googleManagerScript = document.createElement('script');
    googleManagerScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaTrackId;
    googleManagerScript.async = true;
    document.head.appendChild(googleManagerScript);

    let gtagScript: HTMLScriptElement = document.createElement('script');
    gtagScript.appendChild(document.createTextNode('' +
        'window.dataLayer = window.dataLayer || [];\n' +
        'function gtag(){dataLayer.push(arguments);}\n' +
        'gtag(\'js\', new Date());\n' +
        'gtag(\'config\', \'' + environment.googleAnalyticTagId + '\');'
      )
    );
    document.head.appendChild(gtagScript);

  }
}
