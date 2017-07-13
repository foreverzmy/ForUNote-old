import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { CodeMirrorService } from '../code-mirror/code-mirror.service';
import { MarkedService } from './marked.service';
import * as marked from 'marked';

@Component({
  selector: 'app-marked',
  templateUrl: './marked.component.html',
  styleUrls: ['./marked.component.scss']
})
export class MarkedComponent implements OnInit, AfterViewInit {
  public content: string;
  constructor(
    public _codemirror: CodeMirrorService,
    public _marked: MarkedService,
  ) { }

  ngOnInit() {
    this._codemirror.change.subscribe(x => {
      this.content = this._marked.parse(x);
    })
  }

  ngAfterViewInit() {
  }

  openExternal(href) {
    console.log(href);
  }

}
