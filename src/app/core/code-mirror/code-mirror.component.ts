import {
  Component,
  OnInit, AfterViewInit, OnDestroy,
  Input, Output, EventEmitter,
  ElementRef, ViewChild, forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as CodeMirror from 'codemirror';
import { CodeMirrorService } from './code-mirror.service';

@Component({
  selector: 'app-code-mirror',
  templateUrl: './code-mirror.component.html',
  styleUrls: ['./code-mirror.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CodeMirrorComponent),
    multi: true
  }]
})
export class CodeMirrorComponent implements OnInit, AfterViewInit, OnDestroy {
  config: CodeMirror.EditorConfiguration;
  @ViewChild('host') host;

  constructor(
    public _service: CodeMirrorService,
  ) { }

  ngOnInit() {
    this.config = {
      mode: 'gfm',
      lineNumbers: true,
      lineWrapping: true,
      theme: 'nicemark',
      autofocus: true,
      fixedGutter: true,
      dragDrop: false,
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
      extraKeys: {
        'Enter': 'newlineAndIndentContinueMarkdownList',
        'Ctrl-Q': function (cm) {
          cm.foldCode(cm.getCursor());
        }
      }
    };
  }
  ngAfterViewInit() {
    this.config = this.config || {};
    this._service.codemirrorInit(this.host.nativeElement, this.config);
  }

  ngOnDestroy() {

  }
}
