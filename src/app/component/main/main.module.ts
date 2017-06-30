import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { EditComponent } from './edit/edit.component';
import { PreviewComponent } from './preview/preview.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MainComponent,
    EditComponent,
    PreviewComponent,
  ],
  exports: [
    MainComponent,
    EditComponent,
    PreviewComponent,
  ],
  providers: []
})
export class MainModele { }
