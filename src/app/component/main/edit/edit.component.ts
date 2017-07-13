import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import * as CodeMirror from 'codemirror';
import { HotKeyService } from '../../../service/hot-key.service';
import { CodeMirrorService } from '../../../core/code-mirror/code-mirror.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  // @ViewChild('codeRef') codeRef;
  public config: CodeMirror.EditorConfiguration;
  public content;
  constructor(
    public _hotKey: HotKeyService,
    public _codemirror: CodeMirrorService,
    public _renderer: Renderer2
  ) {
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

  ngOnInit() {
    // this.listen();
  }

  // listen() {
  //   this._renderer.listen('document', 'keydown', e => {
  //     let code = e.keyCode;
  //     if (e.shiftKey) {
  //       code += this._hotKeyService.SHIFT_CODE;
  //     }
  //     if (e.ctrlKey) {
  //       code += this._hotKeyService.CTRL_CODE;
  //     }
  //     if (e.altKey) {
  //       code += this._hotKeyService.ALT_CODE;
  //     }
  //     if (this._hotKeyService.hotKeyMap[code]) {
  //       // 调用函数
  //     };
  //   })
  // }

  // 加粗
  bold() {
    this._codemirror.appendSymmetricInlineChar('**');
  }
  // 斜体
  italic() {
    this._codemirror.appendSymmetricInlineChar('*');
  }
  // 分割线
  hr() {
    this._codemirror.appendBlockChar('---\n\n', 2);
  }
  // 引用
  quotation() {
    this._codemirror.appendBlockChar('>', 0, 3);
  }
  // 代码
  code() {
    this._codemirror.appendCodeChar();
  }
  // 数学公式
  math() {
    this._codemirror.appendMathChar();
  }
  // 链接
  link() {
    this._codemirror.appendInlineChar('[]()', 1);
  }
  // 图片
  image() {
    this._codemirror.appendBlockChar('![]()', 0, 2);
  }
  // 表格
  table() {
    this._codemirror.appendTableChar();
  }
  // 有序列表
  ol() {
    this._codemirror.appendBlockChar('1.', 0, 3);
  }
  // 无序列表
  ul() {
    this._codemirror.appendBlockChar('*', 0, 3);
  }

}
