import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { DuocontainerComponent } from './components/duocontainer/duocontainer.component';
import { AccordianComponent } from './components/accordian/accordian.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DuocontainerComponent,
    AccordianComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
