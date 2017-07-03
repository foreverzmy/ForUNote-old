import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeMirrorComponent } from './code-mirror/code-mirror.component';

/**
 * CodemirrorModule
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CodeMirrorComponent,
  ],
  exports: [
    CodeMirrorComponent,
  ]
})

export class PublicModule { }
