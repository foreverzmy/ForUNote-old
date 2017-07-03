import { Component, OnInit, ViewChild } from '@angular/core';

import * as CodeMirror from 'codemirror';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @ViewChild('codeRef') codeRef;
  public config: CodeMirror.EditorConfiguration;
  public content;

  constructor() {
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
  }
  // 加粗
  bold() {
    this.codeRef.appendSymmetricInlineChar('**');
  }
  // 斜体
  italic() {

  }
  // 分割线
  hr() {

  }
  // 引用
  quotation() {

  }
  // 代码
  code() {

  }
  // 数学公式
  math() {

  }
  // 链接
  link() {

  }
  // 图片
  image() {

  }
  // 表格
  table() {

  }
  // 有序列表
  ol() {

  }
  // 无序列表
  ul() {

  }

}
