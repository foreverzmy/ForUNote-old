import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import * as CodeMirror from 'codemirror';
import { HotKeyService } from '../../../service/hot-key.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @ViewChild('codeRef') codeRef;
  public config: CodeMirror.EditorConfiguration;
  public content;
  constructor(
    public _hotKeyService: HotKeyService,
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
    this.content = `// ... some code !`
  }

  ngOnInit() {
    this._hotKeyService.addHotKey('ctrl + b', this.bold);
    this.listen();
  }

  listen() {
    this._renderer.listen('document', 'keydown', e => {
      let code = e.keyCode;
      if (e.shiftKey) {
        code += this._hotKeyService.SHIFT_CODE;
      }
      if (e.ctrlKey) {
        code += this._hotKeyService.CTRL_CODE;
      }
      if (e.altKey) {
        code += this._hotKeyService.ALT_CODE;
      }
      if (this._hotKeyService.hotKeyMap[code]) {
        // 调用函数
      };
    })
  }
  // 加粗
  bold() {
    this.codeRef.appendSymmetricInlineChar('**');
  }
  // 斜体
  italic() {
    this.codeRef.appendSymmetricInlineChar('*');
  }
  // 分割线
  hr() {
    this.codeRef.appendBlockChar('---\n\n', 2);
  }
  // 引用
  quotation() {
    this.codeRef.appendBlockChar('>', 0, 3);
  }
  // 代码
  code() {
    this.codeRef.appendCodeChar();
  }
  // 数学公式
  math() {
    this.codeRef.appendMathChar();
  }
  // 链接
  link() {
    this.codeRef.appendInlineChar('[]()', 1);
  }
  // 图片
  image() {
    this.codeRef.appendBlockChar('![]()', 0, 2);
  }
  // 表格
  table() {
    this.codeRef.appendTableChar();
  }
  // 有序列表
  ol() {
    this.codeRef.appendBlockChar('1.', 0, 3);
  }
  // 无序列表
  ul() {
    this.codeRef.appendBlockChar('*', 0, 3);
  }

}
