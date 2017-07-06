import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
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
  constructor() { }

  ngOnInit() {
    this.marked = marked.setOptions(this.config);
    this.content = this.marked.parse(`# aaa`)
  }

  ngAfterViewInit() {
  }

}
