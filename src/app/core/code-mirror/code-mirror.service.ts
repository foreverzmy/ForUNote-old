import { Injectable, ElementRef, EventEmitter } from '@angular/core';

import * as CodeMirror from 'codemirror';

@Injectable()
export class CodeMirrorService {
  public content = `// ... some code !`;
  public doc: CodeMirror.Doc;
  public instance: CodeMirror.Editor;
  public change = new EventEmitter();
  public focus = new EventEmitter();
  public blur = new EventEmitter();
  public cursorActivity = new EventEmitter();
  constructor() { }

  get value() {
    return this.content;
  }
  set value(v) {
    if (v !== this.content) {
      this.content = v;
      this.updateValue(v);
    }
  }

  codemirrorInit(el, config) {
    this.instance = CodeMirror.fromTextArea(el, config);
    this.instance.setValue(this.content);
    this.doc = this.instance.getDoc();
    this.instance.on('change', () => {
      this.updateValue(this.instance.getValue());
    });
    this.instance.on('focus', (event) => {
      this.focus.emit({
        event
      });
    });

    this.instance.on('cursorActivity', (instance) => {
      this.cursorActivity.emit({
        instance
      });
    });

    this.instance.on('blur', (event) => {
      this.blur.emit({
        event
      });
    });
  }

  updateValue(value) {
    this.value = value;
    this.onTouched();
    this.change.emit(value);
  }

  newlineIfNeed() {
    const pos = this.doc.getCursor();
    let {
      line
    } = pos;
    const {
      ch
    } = pos;
    if (ch !== 0 && this.doc.getLine(line).trim() !== '') {
      line += 2;
    }
    if (this.doc.lastLine() < line) {
      this.doc.replaceRange('\n\n', {
        'line': line,
        'ch': ch
      })
    }
    return {
      line: line,
      ch: 0,
    }
  }

  // 添加对称的行内符号
  appendSymmetricInlineChar(symbol: string) {
    if (this.doc.somethingSelected()) {
      let offset = 0;
      const selectionPosList = this.doc.listSelections();
      for (const pos of selectionPosList) {
        let startCh, endCh;
        if (pos.anchor.ch < pos.head.ch) {
          startCh = pos.anchor.ch;
          endCh = pos.head.ch;
        } else {
          startCh = pos.head.ch;
          endCh = pos.anchor.ch;
        }
        this.doc.replaceRange(symbol, {
          'line': pos.anchor.line,
          'ch': startCh + offset
        });
        offset += symbol.length;
        this.doc.replaceRange(symbol, {
          'line': pos.anchor.line,
          'ch': endCh + offset
        });
        offset += symbol.length;
      }
    } else {
      this.doc.replaceRange(symbol + symbol, this.doc.getCursor());
      this.doc.setCursor({
        'line': this.doc.getCursor().line,
        'ch': this.doc.getCursor().ch - symbol.length
      })
    }
    this.instance.focus();
  }

  // 添加行间符号
  appendBlockChar(symbol: string, lineOffset: number, ch?: number) {
    const pos = this.newlineIfNeed();
    this.doc.replaceRange(symbol + ' ', pos);
    this.doc.setCursor({
      'line': lineOffset ? (pos.line + lineOffset) : pos.line,
      'ch': typeof (ch) === 'undefined' ? 0 : ch,
    });
    this.instance.focus();
  }

  // 添加表格符号
  appendTableChar() {
    const pos = this.newlineIfNeed();
    this.appendBlockChar('|    列1    |    列2    |    列3    |\n|--------- |--------- |--------- |\n|    行1    |    行1    |    行1    |', 2)
  }

  // 添加代码符号
  appendCodeChar() {
    const pos = this.newlineIfNeed();
    this.doc.replaceRange('```js\n\n```', pos);
    this.doc.setCursor({
      'line': pos.line + 1,
      'ch': 0,
    })
    this.instance.focus();
  }

  // 添加数学符号
  appendMathChar() {
    const pos = this.newlineIfNeed();
    this.doc.replaceRange('$$\n\n$$', pos);
    this.doc.setCursor({
      'line': pos.line + 1,
      'ch': 0
    })
  }


  // 添加非对称行内符号
  appendInlineChar(symbol: string, chOffset: number) {
    const pos = this.doc.getCursor();
    this.doc.replaceRange(symbol, pos);
    this.doc.setCursor({
      'line': pos.line,
      'ch': pos.ch + chOffset
    });
    this.instance.focus();
  }

  /**
 * Implements ControlValueAccessor
 */
  writeValue(value) {
    this.content = value || '';
    if (this.instance) {
      this.instance.setValue(this.content);
    }
  }
  onChange(_) { }
  onTouched() { }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }

}
