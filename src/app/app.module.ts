import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './component/title-bar/title-bar.component';

import { MainModele } from './component/main/main.module';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
  ],
  imports: [
    BrowserModule,
    MainModele,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
