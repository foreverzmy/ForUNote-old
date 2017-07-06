import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HotKeyService {
  public hotKeyMap = {};
  public SHIFT_CODE = 1000;
  public CTRL_CODE = 2000;
  public ALT_CODE = 4000;

  constructor() { }

  addHotKey(hotKey: string, cb: string) {
    hotKey = hotKey.replace(/\s+/g, '').toLocaleLowerCase();
    let code = 0;
    if (hotKey.match(/\+/)) {
      const keys = hotKey.split('+');
      for (const key of keys) {
        if (key === 'shift') {
          code += this.SHIFT_CODE;
        } else if (key === 'ctrl') {
          code += this.CTRL_CODE;
        } else if (key === 'alt') {
          code += this.ALT_CODE;
        } else {
          const unicode = key.charCodeAt(0);
          if (unicode >= 97 && unicode <= 122) {
            // 字母
            code += unicode - 97 + 65;
          } else {
            code += unicode;
          }
        }
      }
    }
    this.hotKeyMap[code] = cb;
    // keyCode : 0~9 = 48~57, a~z = 65~90, f1~f12 = 112~123
    // unicode: 0~9 = 48~57, a~z = 97 ~ 122
  }



}
