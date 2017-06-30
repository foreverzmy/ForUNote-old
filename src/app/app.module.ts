import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { TitleBarComponent } from './component/title-bar/title-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    TitleBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
