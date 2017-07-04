import { Injectable, Renderer } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class HotKeyService {

  constructor(
    public render: Renderer
  ) {
    this.render.listenGlobal('document', 'click', e => { })

  }




}
