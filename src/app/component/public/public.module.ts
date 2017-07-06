import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeMirrorComponent } from './code-mirror/code-mirror.component';
import { MarkedComponent } from './marked/marked.component';

/**
 * CodemirrorModule
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CodeMirrorComponent,
    MarkedComponent,
  ],
  exports: [
    CodeMirrorComponent,
    MarkedComponent,
  ]
})

export class PublicModule { }
