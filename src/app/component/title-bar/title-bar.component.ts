declare global {
  interface Window {
    require: any;
  }
}
import { Component, OnInit } from '@angular/core';
const electron = window.require('electron');

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {
  public win = electron.remote.getCurrentWindow();
  constructor() {
  }

  ngOnInit() {
  }

  minimize() {
    this.win.minimize();
  }

  toogleFullScreen() {
    this.win.setFullScreen(!this.win.isFullScreen());
  }

  toggleMaximize() {
    if (this.win.isMaximized()) {
      this.win.unmaximize();
    } else {
      this.win.maximize();
    }
  }

  preClose() {
    this.win.destroy();
  }

}
