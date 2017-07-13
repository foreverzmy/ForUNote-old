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
export class CodeMirrorComponent implements AfterViewInit, OnDestroy {
  @Input() config: CodeMirror.EditorConfiguration;
  @ViewChild('host') host;

  constructor(
    public _service: CodeMirrorService,
  ) { }

  ngAfterViewInit() {
    this.config = this.config || {};
    this._service.codemirrorInit(this.host.nativeElement, this.config);
  }

  ngOnDestroy() {

  }
}
