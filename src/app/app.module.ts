import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { CardHoverComponent } from './card-hover/card-hover.component';
import { HoverClickComponent } from './hover-click/hover-click.component';
import { IconHoverComponent } from './icon-hover/icon-hover.component';
import { IconHComponent } from './icon-h/icon-h.component';
import { TestComponent } from './test/test.component';
import { SafeHtmlCustomPipe } from "./pipes/safe-html.pipe";
import { InfoStudentComponent } from './info-student/info-student.component';
import { MbuttonComponent } from './material/mbutton/mbutton.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HoverClickComponent,
    CardHoverComponent,
    IconHoverComponent,
    IconHComponent,
    TestComponent,
    InfoStudentComponent,
    MbuttonComponent
  ],
  imports: [BrowserModule, SafeHtmlCustomPipe],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
