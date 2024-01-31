import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToolbarComponent} from "./feature/toolbar/toolbar.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FooterComponent} from "./feature/footer/footer.component";
import {TitleStrategy} from "@angular/router";
import {TemplatePageTitleStrategy} from "./service/title.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarComponent,
    BrowserAnimationsModule,
    FooterComponent
  ],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
