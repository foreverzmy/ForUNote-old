import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { EditComponent } from './edit/edit.component';
import { PreviewComponent } from './preview/preview.component';
import { PublicModule } from '../public/public.module';

import { EditService } from '../../service/edit.service';

@NgModule({
  imports: [
    CommonModule,
    PublicModule,
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
  providers: [
    EditService
  ]
})
export class MainModele { }
