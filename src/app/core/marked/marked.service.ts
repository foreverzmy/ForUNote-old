import { Injectable } from '@angular/core';
import * as marked from 'marked';
import hljs from 'highlight.js';

@Injectable()
export class MarkedService {
  public content;
  public marked;
  public renderer;
  public config;
  constructor() {
    this.renderer = new marked.Renderer();
    this.renderer.link = (href, title, text) => this.handleLink(href, title, text);
    this.renderer.image = (href, title, text) => this.handleImage(href, title, text);
    this.config = {
      renderer: this.renderer,
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      langPrefix: 'language-',
      codePrefix: 'hljs',
      highlight: this.highlight,
      sourceLine: true
    };

    this.marked = marked.setOptions(this.config);
  }

  parse(x) {
    return this.marked.parse(x);
  }

  handleLink(href, title, text) {
    return `<a href=${href} title=${title}>${text}</a>`;
  }

  handleImage(href, title, text) {
    return `<img src=${href} title=${text}/><i style='margin:8px auto 0 auto;display:table'>${text}</i>`;
  };

  highlight(code, language) {
    if (language === 'auto') {
      return hljs.highlightAuto(code).value;
    }
    // // 时序图
    // if (language === 'sequence') {
    //   try {
    //     var previous = sequenceBuffer.innerHTML;
    //     sequenceBuffer.innerHTML = null;
    //     Diagram.parse(code).drawSVG('sequence-buffer', {
    //       theme: 'simple'
    //     });
    //     var current = sequenceBuffer.innerHTML;
    //     if (previous)
    //       sequenceBuffer.innerHTML = previous;
    //     return '<p class="text-center">' + current + '</p>';
    //   } catch (e) {
    //     console.error(e);
    //     return '<pre><code>' + code + '</code></pre>';
    //   }
    // }
    // // 流程图
    // if (language === 'flow') {
    //   try {
    //     var previous = chartBuffer.innerHTML;
    //     chartBuffer.innerHTML = null;
    //     flowchart.parse(code).drawSVG('chart-buffer', flowchartConfig);
    //     var current = chartBuffer.innerHTML;
    //     if (previous)
    //       chartBuffer.innerHTML = previous;
    //     return '<p class="text-center">' + current + '</p>';
    //   } catch (e) {
    //     return '<pre><code>' + code + '</code></pre>';
    //   }
    // }
    // try {
    //   return hljs.highlight(language, code).value;
    // } catch (e) {
    //   return hljs.highlightAuto(code).value;
    // }
  }

}
