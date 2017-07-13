import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeMirrorService } from './code-mirror/code-mirror.service';
import { MarkedService } from './marked/marked.service';

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
  ],
  providers: [
    CodeMirrorService,
    MarkedService,
  ]
})

export class CoreModule { }
