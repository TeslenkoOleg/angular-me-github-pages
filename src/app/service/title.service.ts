import {Injectable} from "@angular/core";
import {RouterStateSnapshot, TitleStrategy} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    console.log('title', title);
    if (title !== undefined) {
      this.title.setTitle(`Oleh Teslenko | ${title}`);
    }
  }
}
