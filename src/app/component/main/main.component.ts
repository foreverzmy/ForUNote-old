import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    public _renderer: Renderer2,
  ) { }

  ngOnInit() {
    this._renderer.listen('body', 'click', e => {
      return false;
    })
  }



}
