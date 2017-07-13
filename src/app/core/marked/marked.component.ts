import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { CodeMirrorService } from '../code-mirror/code-mirror.service';
import * as marked from 'marked';

@Component({
  selector: 'app-marked',
  templateUrl: './marked.component.html',
  styleUrls: ['./marked.component.scss']
})
export class MarkedComponent implements OnInit, AfterViewInit {
  public marked;
  @Input() config;
  public content: string;
  constructor(
    public _codemirror: CodeMirrorService,
  ) { }

  ngOnInit() {
    this.marked = marked.setOptions(this.config);
    this._codemirror.change.subscribe(x => {
      this.content = this.marked.parse(x);
    })
  }

  ngAfterViewInit() {
  }

}
